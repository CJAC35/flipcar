import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class Board {

	private context: MRE.Context;
	private assets: MRE.AssetContainer;
	private centerPosition: MRE.Vector3Like;
	private centerRotation: MRE.QuaternionLike;
	private localSpace: MRE.Actor;
	private labelSpawnPlace: MRE.Vector3Like = { x: 0, y: 1, z: -1 };
	private totalOnBoard1: number;
	private totalOnBoard2: number;

	constructor(context: MRE.Context, assets: MRE.AssetContainer,
		centerPosition: MRE.Vector3Like, centerRotation: MRE.QuaternionLike = { x: 0, y: 0, z: 0, w: 1 }) {
		this.context = context;
		this.assets = assets;
		this.centerPosition = centerPosition;
		this.centerRotation = centerRotation;
		this.totalOnBoard1 = 0;
		this.totalOnBoard2 = 0;
		this.createIt();
	}

	private createIt() {
		//VELCRO
		this.localSpace = MRE.Actor.Create(this.context, {
			actor: {
				transform: {
					app: {
						position: this.centerPosition,
						rotation: this.centerRotation,
					}
				}
			}
		});

		//////arbol
	
		const arbol = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2123752646828360584',
			actor: {
				parentId: this.localSpace.id,
				transform: { local: { 
					position: { x: 0.9, y: 0, z: 0 } ,
					scale:{x:2.25,y:3.25,z:2.25},
					rotation:{x:0,y:0,z:0}
				} },
				appearance: {
					enabled:true
				}
			}
		});
		this.createLabel2("", this.labelSpawnPlace);
		this.context.rpc.on("point",(value)=>{
		});

	}

/////REGALO modelo
	public createLabel2(name: string, position: MRE.Vector3Like, height = 0.1) {
		const label = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2123969196671894403',
			actor: {
				name: "Label2",
				parentId: this.localSpace.id,
				transform: {
					local: {
						position: position,
						rotation: { x: .707, y: 0, z: 0, w: .707 },
						scale: {
									x:10, y:10, z:10
						}
					}
				},
				grabbable: true,
				rigidBody: {
					useGravity: true,
				}
			}
		});
		label.subscribe("transform");
		label.onGrab("begin", () => {
			if (label.tag === "counted1") {
				this.totalOnBoard1--;
				label.tag = "";
			} else if (label.tag === "counted2"){
				this.totalOnBoard2--;
				label.tag = "";
			}
		})
		label.onGrab("end", (user) => {
			let falsy = false;
			this.context.rpc.receive("point", user.id);
			//VELCRO
			if (label.transform.app.position.y < 5.36 && label.transform.app.position.y > 0.86 &&
				label.transform.app.position.x > -0.07 && label.transform.app.position.x < 3.9 &&
				label.transform.app.position.z > -0.8 && label.transform.app.position.z < 1.15) {
				label.enableRigidBody({ isKinematic: true });
				MRE.Animation.AnimateTo(this.context, label, {
					destination: {
						transform: {
							local: {
								position: { z: -0.07 },
								rotation: this.centerRotation
							}
						}
					},
					duration: 0.1,
				});
				label.tag = "counted1";
				this.totalOnBoard1++;
				if (this.totalOnBoard1 >= 6 && this.totalOnBoard2 >= 6) {
					//
				}
			} else if (falsy && 
				label.transform.app.position.y < 3.36 && label.transform.app.position.y > 0.86 &&
				label.transform.app.position.x > -6 && label.transform.app.position.x < -2 &&
				label.transform.app.position.z > -0.8 && label.transform.app.position.z < 0.15) {
				label.enableRigidBody({ isKinematic: true });
				MRE.Animation.AnimateTo(this.context, label, {
					destination: {
						transform: {
							local: {
								position: { z: -0.07 },
								rotation: this.centerRotation
							}
						}
					},
					duration: 0.1,
				});
				label.tag = "counted2";
				this.totalOnBoard2++;
				if (this.totalOnBoard2 >=2 || this.totalOnBoard1>=2) {
					this.context.rpc.receive("point", user.id);
				}
			} else {
				label.enableRigidBody({ isKinematic: false });
			}
		});
		label.subscribe("transform");
		label.collider.layer = MRE.CollisionLayer.Default;
		}
}