import * as MRE from '@microsoft/mixed-reality-extension-sdk';

export default class HelloWorld {
	private text: MRE.Actor = null;
	private cube: MRE.Actor = null;
	private cube2: MRE.Actor = null;
	private cube3: MRE.Actor = null;
	private cube4: MRE.Actor = null;
	private cube5: MRE.Actor = null;
	private cube6: MRE.Actor = null;
	private cube7: MRE.Actor = null;
	private cube8: MRE.Actor = null;
	private cube9: MRE.Actor = null;
	private cube10: MRE.Actor = null;
	private cube11: MRE.Actor = null;
	private cube12: MRE.Actor = null;
	private cube13: MRE.Actor = null;
	private cube14: MRE.Actor = null;
	private cube15: MRE.Actor = null;
	private cube16: MRE.Actor = null;
	private cube17: MRE.Actor = null;
	private cube18: MRE.Actor = null;
	private cube19: MRE.Actor = null;
	private cube20: MRE.Actor = null;
	private cube21: MRE.Actor = null;
	private cube22: MRE.Actor = null;
	private cube23: MRE.Actor = null;
	private cube24: MRE.Actor = null;
	private cube25: MRE.Actor = null;
	private assets: MRE.AssetContainer;

	constructor(private context: MRE.Context) {
		this.context.onStarted(() => this.started());
	}

	private async started() {
	
		this.assets = new MRE.AssetContainer(this.context);

		this.cube = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021460996429709816',
			actor: {
				name: 'cartera',
				transform: {
					local: {
						position: { x: 0, y: -0.53, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube2 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2008273993420768116',
			actor: {
				name: 'casa',
				transform: {
					local: {
						position: { x: 1, y: -1, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});

		this.cube3 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2008277899685135003',
			actor: {
				name: 'zapatilla',
				transform: {
					local: {
						position: { x: 2, y: -0.53, z: 0.07 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube4 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2008403543081354049',
			actor: {
				name: 'vaso',
				transform: {
					local: {
						position: { x: 3.0, y: -1, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube5 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2008413359614984217',
			actor: {
				name: 'silla',
				transform: {
					local: {
						position: { x: 4.05, y: -1, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		//6
		this.cube6 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2009488963919676210',
			actor: {
				name: 'pañuelo',
				transform: {
					local: {
						position: { x: 0, y: 0.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.003 }
					}
				}
			}
		});
		this.cube7 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2009502216292925816',
			actor: {
				name: 'camiseta',
				transform: {
					local: {
						position: { x: 1, y: 0.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.003 }
					}
				}
			}
		});
		this.cube8 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2009509445159092581',
			actor: {
				name: 'camisa',
				transform: {
					local: {
						position: { x: 2, y: 0.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube9 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2009859901152559937',
			actor: {
				name: 'ropa',
				transform: {
					local: {
						position: { x: 3, y: 0.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube10 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2009882274190852614',
			actor: {
				name: 'gafas',
				transform: {
					local: {
						position: { x: 4.05, y: 0.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		
		this.cube11 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021477251203203615',
			actor: {
				name: 'pizarra',
				transform: {
					local: {
						position: { x: 0, y: 1.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.003 }
					}
				}
			}
		});
		this.cube12 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021502885832950592',
			actor: {
				name: 'casa',
				transform: {
					local: {
						position: { x: 1, y: 1.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube13 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021502913095926657',
			actor: {
				name: 'silla',
				transform: {
					local: {
						position: { x: 2, y: 1.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube14 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021502900252967783',
			actor: {
				name: 'casa',
				transform: {
					local: {
						position: { x: 3.05, y: 1.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube15 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021502926333150112',
			actor: {
				name: 'silla',
				transform: {
					local: {
						position: { x: 4.05, y: 1.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		//16
		this.cube16 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021900556208964287',
			actor: {
				name: 'carta',
				transform: {
					local: {
						position: { x: 0, y: 2.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube17 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021900542971740839',
			actor: {
				name: 'coche',
				transform: {
					local: {
						position: { x: 1, y: 2.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube18 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021900582029099724',
			actor: {
				name: 'espejo',
				transform: {
					local: {
						position: { x: 2, y: 2.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube19 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021900594486182608',
			actor: {
				name: 'pantalla',
				transform: {
					local: {
						position: { x: 3.05, y: 2.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube20 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2021900569060311752',
			actor: {
				name: 'teclado',
				transform: {
					local: {
						position: { x: 4.05, y: 2.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		
		this.cube21 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2022441838496973415',
			actor: {
				name: 'barco',
				transform: {
					local: {
						position: { x: 0, y: 3.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube22 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2022475078951764168',
			actor: {
				name: 'contrato',
				transform: {
					local: {
						position: { x: 1, y: 3.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube23 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2022441814639772256',
			actor: {
				name: 'curriculo',
				transform: {
					local: {
						position: { x: 2, y: 3.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube24 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2022441830368412261',
			actor: {
				name: 'libreta',
				transform: {
					local: {
						position: { x: 3.05, y: 3.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});
		this.cube25 = MRE.Actor.CreateFromLibrary(this.context, {
			resourceId: 'artifact:2022441822768333411',
			actor: {
				name: 'policia',
				transform: {
					local: {
						position: { x: 4.05, y: 3.47, z: 0 },
						scale: { x: 0.004, y: 0.004, z: 0.01 }
					}
				}
			}
		});

		const flipAnimData = this.assets.createAnimationData(
			"DoAFlip",
			{ tracks: [{
				target: MRE.ActorPath("target").transform.local.rotation,
				keyframes: this.generateSpinKeyframes(1.0, MRE.Vector3.Up()),
				easing: MRE.AnimationEaseCurves.EaseInCircular
			}]}
		);

		const flipAnim = await flipAnimData.bind({ target: this.cube });
		const flipAnim2 = await flipAnimData.bind({ target: this.cube2 });
		const flipAnim3 = await flipAnimData.bind({ target: this.cube3 });
		const flipAnim4 = await flipAnimData.bind({ target: this.cube4 });
		const flipAnim5 = await flipAnimData.bind({ target: this.cube5 });
		const flipAnim6 = await flipAnimData.bind({ target: this.cube6 });
		const flipAnim7 = await flipAnimData.bind({ target: this.cube7 });
		const flipAnim8 = await flipAnimData.bind({ target: this.cube8 });
		const flipAnim9 = await flipAnimData.bind({ target: this.cube9 });
		const flipAnim10 = await flipAnimData.bind({ target: this.cube10 });
		const flipAnim11 = await flipAnimData.bind({ target: this.cube11 });
		const flipAnim12 = await flipAnimData.bind({ target: this.cube12 });
		const flipAnim13 = await flipAnimData.bind({ target: this.cube13 });
		const flipAnim14 = await flipAnimData.bind({ target: this.cube14 });
		const flipAnim15 = await flipAnimData.bind({ target: this.cube15 });
		const flipAnim16 = await flipAnimData.bind({ target: this.cube16 });
		const flipAnim17 = await flipAnimData.bind({ target: this.cube17 });
		const flipAnim18 = await flipAnimData.bind({ target: this.cube18 });
		const flipAnim19 = await flipAnimData.bind({ target: this.cube19 });
		const flipAnim20 = await flipAnimData.bind({ target: this.cube20 });
		const flipAnim21 = await flipAnimData.bind({ target: this.cube21 });
		const flipAnim22 = await flipAnimData.bind({ target: this.cube22 });
		const flipAnim23 = await flipAnimData.bind({ target: this.cube23 });
		const flipAnim24 = await flipAnimData.bind({ target: this.cube24 });
		const flipAnim25 = await flipAnimData.bind({ target: this.cube25 });

		const buttonBehavior = this.cube.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior2 = this.cube2.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior3 = this.cube3.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior4 = this.cube4.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior5 = this.cube5.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior6 = this.cube6.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior7 = this.cube7.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior8 = this.cube8.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior9 = this.cube9.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior10 = this.cube10.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior11 = this.cube11.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior12 = this.cube12.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior13 = this.cube13.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior14 = this.cube14.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior15 = this.cube15.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior16 = this.cube16.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior17 = this.cube17.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior18 = this.cube18.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior19 = this.cube19.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior20 = this.cube20.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior21 = this.cube21.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior22 = this.cube22.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior23 = this.cube23.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior24 = this.cube24.setBehavior(MRE.ButtonBehavior);
		const buttonBehavior25 = this.cube25.setBehavior(MRE.ButtonBehavior);

		/* 
		buttonBehavior.onHover('enter', () => {
			// use the convenience function "AnimateTo" instead of creating the animation data in advance
			MRE.Animation.AnimateTo(this.context, this.cube, {
				destination: { transform: { local: { scale: { x: 0.005, y: 0.005, z: 0.011 } } } },
				duration: 0.3,
				easing: MRE.AnimationEaseCurves.EaseOutSine
			});
		});
		buttonBehavior.onHover('exit', () => {
			MRE.Animation.AnimateTo(this.context, this.cube, {
				destination: { transform: { local: { scale: { x: 0.004, y: 0.004, z: 0.01 } } } },
				duration: 0.3,
				easing: MRE.AnimationEaseCurves.EaseOutSine
			});
		});
		*/
		buttonBehavior.onClick(_ => {
			flipAnim.play();
		});
		buttonBehavior2.onClick(_ => {
			flipAnim2.play();
		});
		buttonBehavior3.onClick(_ => {
			flipAnim3.play();
		});
		buttonBehavior4.onClick(_ => {
			flipAnim4.play();
		});
		buttonBehavior5.onClick(_ => {
			flipAnim5.play();
		});
		buttonBehavior6.onClick(_ => {
			flipAnim6.play();
		});
		buttonBehavior7.onClick(_ => {
			flipAnim7.play();
		});
		buttonBehavior8.onClick(_ => {
			flipAnim8.play();
		});
		buttonBehavior9.onClick(_ => {
			flipAnim9.play();
		});
		buttonBehavior10.onClick(_ => {
			flipAnim10.play();
		});
		buttonBehavior11.onClick(_ => {
			flipAnim11.play();
		});
		buttonBehavior12.onClick(_ => {
			flipAnim12.play();
		});
		buttonBehavior13.onClick(_ => {
			flipAnim13.play();
		});
		buttonBehavior14.onClick(_ => {
			flipAnim14.play();
		});
		buttonBehavior15.onClick(_ => {
			flipAnim15.play();
		});
		buttonBehavior16.onClick(_ => {
			flipAnim16.play();
		});
		buttonBehavior17.onClick(_ => {
			flipAnim17.play();
		});
		buttonBehavior18.onClick(_ => {
			flipAnim18.play();
		});
		buttonBehavior19.onClick(_ => {
			flipAnim19.play();
		});
		buttonBehavior20.onClick(_ => {
			flipAnim20.play();
		});
		buttonBehavior21.onClick(_ => {
			flipAnim21.play();
		});
		buttonBehavior22.onClick(_ => {
			flipAnim22.play();
		});
		buttonBehavior23.onClick(_ => {
			flipAnim23.play();
		});
		buttonBehavior24.onClick(_ => {
			flipAnim24.play();
		});
		buttonBehavior25.onClick(_ => {
			flipAnim25.play();
		});
	}

	private generateSpinKeyframes(duration: number, axis: MRE.Vector3): Array<MRE.Keyframe<MRE.Quaternion>> {
		return [{
			time: 0 * duration,
			value: MRE.Quaternion.RotationAxis(axis, 0)
		}, {
			time: 0.25 * duration,
			value: MRE.Quaternion.RotationAxis(axis, Math.PI / 2)
		}, {
			time: 0.5 * duration,
			value: MRE.Quaternion.RotationAxis(axis, Math.PI)
		}, {
			time: 4 * duration,
			value: MRE.Quaternion.RotationAxis(axis, Math.PI)
		}, {
			time: 4.5 * duration,
			value: MRE.Quaternion.RotationAxis(axis, 0)
		}];
	}
}