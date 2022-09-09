if ( TRACE ) { TRACE( JSON.parse( '["CameraControll#ClampAngle","CameraControll#init","CameraControll#Start","CameraControll#Update","ControlChuong#init","ControlChuong#Update","ControlChuong#OnTriggerStay","ControlChuong#playEffect","ControlMagic#init","ControlMagic#Update","ControlMagic#OnTriggerStay","CreateGridPlayer#init","CreateGridPlayer#Start","CreateGridPlayer#CreateBossByIndex","CreateGridPlayer#FormatNumber","CreateGridPlayer#Update","CreateGridPlayer#waitShowWinGame","CreateGridPlayer#CheckExistUnlockedPlayerNear","CreateGridPlayer#CheckExistUnlockedPlayerFar","CreateGridPlayer#CheckExistUnlockedPlayerPhep","CreateGridPlayer#CreateGrid","CreateGridPlayer#GetInfoPlayerFromList","CreateGridPlayer#SaveInfoPlayer","CreateGridPlayer#PressFight","DragPlayer#init","DragPlayer#Start","DragPlayer#ReturnClickedObject","DragPlayer#Update","DragPlayer#waitHideEffectMerge","DragPlayer#waitHideEffectMove","EntityInfoPlayer#ctor","EntityPosPlayer#ctor","FixedUI#init","FixedUI#Start","FixedUI#UpdateUI","FixedUI#Update","GameController#Awake","GameController#Start","GameController#EndCard","ItemGridControl#init","ItemGridControl#HideAllLineItem","ItemGridControl#UnSelectItem","ItemGridControl#SelectedItem","ItemGridControl#OnTriggerExit","ItemGridControl#OnTriggerStay","LayerLab.PanelControlSimpleCasual#init","LayerLab.PanelControlSimpleCasual#Start","LayerLab.PanelControlSimpleCasual#Update","LayerLab.PanelControlSimpleCasual#Click_Prev","LayerLab.PanelControlSimpleCasual#Click_Next","LayerLab.PanelControlSimpleCasual#SetArrowActive","LayerLab.PanelControlSimpleCasual#CheckControl","LayerLab.PanelControlSimpleCasual#Click_Mode","LayerLab.PanelControlSimpleCasual#SetMode","LayerLab.PanelSimpleCasual#OnEnable","LayerLab.PanelSimpleCasual#OnDisable","MuiTenControl#init","MuiTenControl#Start","MuiTenControl#Update","MuiTenControl#OnTriggerStay","PlayerController#init","PlayerController#Start","PlayerController#LoadPlayer","PlayerController#Update","PlayerController#GetClosestEnemy","PlayerController#OnTriggerStay","PlayerController#OnTriggerEnter","PlayerController#OnTriggerExit","PlayerController#OnCollisionStay","PlayerController#OnCollisionExit","PlayerController#ArcherShooter","PlayerController#hitChuong","PlayerController#hitDamage","PlayerController#waitdestroyBoxCollider","PlayerController#ArcherIdle","RobotControll#init","RobotControll#Start","RobotControll#SetTeamColor","RobotControll#Awake","RobotControll#Update","RobotControll#PlayFxBundle0","RobotControll#OnGUI","SoundManager#Start","SoundManager#ClickAudioBtn","SoundManager#BuyPlayerAudioBtn","SoundManager#MovePlayerAudioBtn","SoundManager#RunnerAudioBtn","SoundManager#GunShootAudioBtn","SoundManager#StopRunnerAudioBtn","SoundManager#DieAudioBtn","SoundManager#NearAttackAudioBtn","SoundManager#FarAttackAudioBtn","SoundManager#MergePlayerAudioBtn","SoundManager#WinGameSound","SoundManager#LoseGameSound","Storelink#PressLinkGame","UnityEngine.UI.Extensions.UIParticleSystem#mainTexture#get","UnityEngine.UI.Extensions.UIParticleSystem#init","UnityEngine.UI.Extensions.UIParticleSystem#Initialize","UnityEngine.UI.Extensions.UIParticleSystem#Awake","UnityEngine.UI.Extensions.UIParticleSystem#OnPopulateMesh","UnityEngine.UI.Extensions.UIParticleSystem#Update","UnityEngine.UI.Extensions.UIParticleSystem#LateUpdate","UnityEngine.UI.Extensions.UIParticleSystem#OnDestroy","UnityEngine.UI.Extensions.UIParticleSystem#StartParticleEmission","UnityEngine.UI.Extensions.UIParticleSystem#StopParticleEmission","UnityEngine.UI.Extensions.UIParticleSystem#PauseParticleEmission"]' ) ); }
/**
 * @version 1.0.8287.26840
 * @copyright anton
 * @compiler Bridge.NET 17.9.19-luna
 */
Bridge.assembly("UnityScriptsCompiler", function ($asm, globals) {
    "use strict";

    /*CameraControll start.*/
    Bridge.define("CameraControll", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            methods: {
                /*CameraControll.ClampAngle:static start.*/
                ClampAngle: function (angle, min, max) {
if ( TRACE ) { TRACE( "CameraControll#ClampAngle", this ); }


                    if (angle < -360) {
                        angle += 360;
                    }

                    if (angle > 360) {
                        angle -= 360;
                    }



                    return Math.max(min, Math.min(angle, max));

                },
                /*CameraControll.ClampAngle:static end.*/


            }
        },
        fields: {
            target: null,
            cam: null,
            distance: 0,
            cameraSpeed: 0,
            xSpeed: 0,
            ySpeed: 0,
            yMinLimit: 0,
            yMaxLimit: 0,
            minDistance: 0,
            maxDistance: 0,
            x: 0,
            y: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CameraControll#init", this ); }

                this.distance = 10.0;
                this.cameraSpeed = 5;
                this.xSpeed = 175.0;
                this.ySpeed = 75.0;
                this.yMinLimit = 20;
                this.yMaxLimit = 80;
                this.minDistance = 5;
                this.maxDistance = 20;
                this.x = 0.0;
                this.y = 0.0;
            }
        },
        methods: {
            /*CameraControll.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CameraControll#Start", this ); }


                var angles = this.transform.eulerAngles.$clone();

                this.x = angles.y;

                this.y = angles.x;



                // Make the rigid body not change rotation

                if (UnityEngine.Object.op_Implicit(this.GetComponent(UnityEngine.Rigidbody))) {
                    this.GetComponent(UnityEngine.Rigidbody).freezeRotation = true;
                }

            },
            /*CameraControll.Start end.*/

            /*CameraControll.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CameraControll#Update", this ); }


                if (UnityEngine.Object.op_Implicit(this.target) && UnityEngine.Object.op_Implicit(this.cam)) {



                    //Zooming with mouse

                    this.distance -= UnityEngine.Input.GetAxis("Mouse ScrollWheel") * this.distance;

                    this.distance = Math.max(this.minDistance, Math.min(this.distance, this.maxDistance));



                    //Detect mouse drag;

                    if (UnityEngine.Input.GetMouseButton(0)) {



                        this.x += UnityEngine.Input.GetAxis("Mouse X") * this.xSpeed * 0.02;

                        this.y -= UnityEngine.Input.GetAxis("Mouse Y") * this.ySpeed * 0.02;

                    }

                    this.y = CameraControll.ClampAngle(this.y, this.yMinLimit, this.yMaxLimit);



                    var rotation = new pc.Quat().setFromEulerAngles_Unity( this.y, this.x, 0 );

                    var position = rotation.transformVector( (new pc.Vec3( 0.0, 0.0, -this.distance ).add( this.target.position )) );



                    this.transform.position = new pc.Vec3().lerp( this.transform.position, position, this.cameraSpeed * UnityEngine.Time.deltaTime );

                    this.transform.rotation = rotation.$clone();

                }

            },
            /*CameraControll.Update end.*/


        }
    });
    /*CameraControll end.*/

    /*ControlChuong start.*/
    Bridge.define("ControlChuong", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            RootPlayer: null,
            isBoxCoin: false,
            indexLevel: 0,
            speedBullet: 0,
            isTrigger: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ControlChuong#init", this ); }

                this.speedBullet = 6.0;
            }
        },
        methods: {
            /*ControlChuong.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ControlChuong#Update", this ); }

                if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    if (this.isBoxCoin) {
                        this.transform.LookAt$2(new pc.Vec3( this.target.position.x, this.target.position.y, this.target.position.z ));
                    } else {
                        this.transform.LookAt$2(new pc.Vec3( this.target.position.x, this.target.position.y + 0.7, this.target.position.z ));
                    }
                    this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.speedBullet ).clone().scale( UnityEngine.Time.deltaTime ), UnityEngine.Space.Self);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*ControlChuong.Update end.*/

            /*ControlChuong.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "ControlChuong#OnTriggerStay", this ); }

                if ((Bridge.referenceEquals(other.gameObject.tag, "Player") || Bridge.referenceEquals(other.gameObject.tag, "Enemy")) && !Bridge.referenceEquals(other.gameObject.tag, this.RootPlayer.gameObject.tag)) {
                    var playerController = other.gameObject.GetComponent(PlayerController);

                    if (UnityEngine.MonoBehaviour.op_Inequality(playerController, null) && !playerController.isDie && !this.isTrigger) {
                        this.playEffect(playerController); //ri2
                        //long2
                        this.GetComponent(UnityEngine.Collider).enabled = false;
                        this.isTrigger = true;
                        playerController.currentHp -= playerController.listDamageFar_PlayerByLevel[0]; //long9
                        if (playerController.isEnemy || playerController.isBoxCoin) {
                            //playerController.GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[0] + "$";
                            //playerController.GiftCoin_Txt.gameObject.SetActive(true);
                            //playerController.GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                            //StartCoroutine(waitHideGiftCoin(playerController));                   
                            // Coin
                            //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[0];
                            //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[0];
                            //CreateGridPlayer.instance.Coin_Txt.text =
                            //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                            //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                        } else {
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                        } //ri2
                    }
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*ControlChuong.OnTriggerStay end.*/

            /*ControlChuong.playEffect start.*/
            playEffect: function (playerController) {
if ( TRACE ) { TRACE( "ControlChuong#playEffect", this ); }

                playerController.hitChuong();
            },
            /*ControlChuong.playEffect end.*/


        }
    });
    /*ControlChuong end.*/

    /*ControlMagic start.*/
    Bridge.define("ControlMagic", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            RootPlayer: null,
            isBoxCoin: false,
            indexLevel: 0,
            speedBullet: 0,
            isTrigger: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ControlMagic#init", this ); }

                this.speedBullet = 6.0;
            }
        },
        methods: {
            /*ControlMagic.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "ControlMagic#Update", this ); }

                if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    if (this.isBoxCoin) {
                        this.transform.LookAt$2(new pc.Vec3( this.target.position.x, this.target.position.y, this.target.position.z ));
                    } else {
                        this.transform.LookAt$2(new pc.Vec3( this.target.position.x, this.target.position.y + 0.7, this.target.position.z ));
                    }
                    this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.speedBullet ).clone().scale( UnityEngine.Time.deltaTime ), UnityEngine.Space.Self);
                } else {
                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*ControlMagic.Update end.*/

            /*ControlMagic.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "ControlMagic#OnTriggerStay", this ); }

                if ((Bridge.referenceEquals(other.gameObject.tag, "Player") || Bridge.referenceEquals(other.gameObject.tag, "Enemy")) && !Bridge.referenceEquals(other.gameObject.tag, this.RootPlayer.gameObject.tag)) {
                    var playerController = other.gameObject.GetComponent(PlayerController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(playerController, null) && !playerController.isDie && !this.isTrigger) {
                        //playEffect(playerController);
                        //long2
                        this.GetComponent(UnityEngine.Collider).enabled = false;
                        this.isTrigger = true;
                        playerController.currentHp -= playerController.listDamageFar_PlayerByLevel[this.RootPlayer.GetComponent(PlayerController).indexLevel]; //long9
                        if (playerController.isEnemy || playerController.isBoxCoin) {
                            //playerController.GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[playerController.indexLevel] + "$";
                            //playerController.GiftCoin_Txt.gameObject.SetActive(true);
                            //playerController.GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                            //StartCoroutine(waitHideGiftCoin(playerController));                    
                            // Coin
                            //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[playerController.indexLevel];
                            //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[playerController.indexLevel];
                            //CreateGridPlayer.instance.Coin_Txt.text =
                            //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                            //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                        } else {
                            UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                        } //ri2
                    }

                    UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                }
            },
            /*ControlMagic.OnTriggerStay end.*/


        }
    });
    /*ControlMagic end.*/

    /*CreateGridPlayer start.*/
    Bridge.define("CreateGridPlayer", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            ObjectGroundGrid: null,
            GameGrid: null,
            listPosContainerPlayer: null,
            listInfoPlayer: null,
            listUnlockedPlayerNear: null,
            listUnlockedPlayerFar: null,
            listUnlockedPlayerPhep: null,
            listPosShowEnemy: null,
            ParentListPlayer: null,
            listPlayerNear: null,
            listPlayerFar: null,
            listPlayerPhep: null,
            numberRow: 0,
            numberColumn: 0,
            isStartFight: false,
            listObjectButton: null,
            listAllPlayer: null,
            listAllEnemy: null,
            Confetti_WinGame: null,
            isWinGame: false,
            isLoseGame: false,
            listCoinBuyPlayer: null,
            MainPanel: null,
            Level_Txt: null,
            listBoss: null,
            listColor: null,
            Tutorial1: null,
            Tutorial3: null,
            PanelLinkGame: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#init", this ); }

                this.listPosContainerPlayer = new (System.Collections.Generic.List$1(EntityPosPlayer)).ctor();
                this.listInfoPlayer = new (System.Collections.Generic.List$1(EntityInfoPlayer)).ctor();
                this.listUnlockedPlayerNear = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.listUnlockedPlayerFar = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.listUnlockedPlayerPhep = new (System.Collections.Generic.List$1(System.Int32)).ctor();
                this.numberRow = 3;
                this.numberColumn = 5;
                this.listAllPlayer = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.listAllEnemy = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*CreateGridPlayer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#Start", this ); }

                UnityEngine.PlayerPrefs.DeleteAll();
                if (UnityEngine.PlayerPrefs.GetInt("FirstGame", 0) === 0) {
                    //ri2            PlayerPrefs.SetString("ListContainerPlayer", "1,0,far,0_2,0,near,0");
                    UnityEngine.PlayerPrefs.SetString("ListContainerPlayer", "1,2,near,3_3,2,near,3_1,0,near,5_3,0,far,5");
                    UnityEngine.PlayerPrefs.SetString("ListUnlockedPlayerNear", "0");
                    UnityEngine.PlayerPrefs.SetString("ListUnlockedPlayerFar", "0");
                    UnityEngine.PlayerPrefs.SetString("mCoin", "10000000");

                    UnityEngine.PlayerPrefs.SetInt("CurrentCoinBuyNear", 50);
                    UnityEngine.PlayerPrefs.SetInt("CurrentCoinBuyFar", 50);
                    UnityEngine.PlayerPrefs.SetInt("CurrentCoinBuyPhep", 50);
                    UnityEngine.PlayerPrefs.SetInt("FirstGame", 1);
                }

                CreateGridPlayer.instance = this;

                // Coin
                //coinGame = long.Parse(PlayerPrefs.GetString("mCoin", "0"));
                //Coin_Txt.text = FormatNumber(coinGame);

                if (UnityEngine.PlayerPrefs.GetInt("Tutorial", 0) === 1) {
                    UnityEngine.PlayerPrefs.SetString("ListContainerPlayer", "0,0,near,0_0,1,near,0_0,2,near,0_1,0,near,0_1,2,near,0_2,0,near,0_2,1,near,0_2,2,near,0_3,0,near,0_3,2,near,0_4,0,near,0_4,1,near,0_4,2,near,0");

                    this.Level_Txt.text = "LEVEL 2";
                    this.Tutorial1.SetActive(false);
                    this.CreateBossByIndex(2);
                    this.PanelLinkGame.SetActive(true);
                } else {
                    this.Level_Txt.text = "LEVEL 1";
                    this.CreateBossByIndex(2);
                }

                //listCoinBuyPlayer[0].text = FormatNumber(PlayerPrefs.GetInt("CurrentCoinBuyNear", 50));
                //listCoinBuyPlayer[1].text = FormatNumber(PlayerPrefs.GetInt("CurrentCoinBuyFar", 50));

                this.listPosContainerPlayer.add(new EntityPosPlayer(2, 0));
                this.listPosContainerPlayer.add(new EntityPosPlayer(1, 0));
                this.listPosContainerPlayer.add(new EntityPosPlayer(3, 0));
                this.listPosContainerPlayer.add(new EntityPosPlayer(0, 0));
                this.listPosContainerPlayer.add(new EntityPosPlayer(4, 0));

                this.listPosContainerPlayer.add(new EntityPosPlayer(2, 1));
                this.listPosContainerPlayer.add(new EntityPosPlayer(1, 1));
                this.listPosContainerPlayer.add(new EntityPosPlayer(3, 1));
                this.listPosContainerPlayer.add(new EntityPosPlayer(0, 1));
                this.listPosContainerPlayer.add(new EntityPosPlayer(4, 1));

                this.listPosContainerPlayer.add(new EntityPosPlayer(2, 2));
                this.listPosContainerPlayer.add(new EntityPosPlayer(1, 2));
                this.listPosContainerPlayer.add(new EntityPosPlayer(3, 2));
                this.listPosContainerPlayer.add(new EntityPosPlayer(0, 2));
                this.listPosContainerPlayer.add(new EntityPosPlayer(4, 2));

                var mCheckPlayer = UnityEngine.PlayerPrefs.GetString("ListContainerPlayer", "");
                if (!System.String.equals(mCheckPlayer, "")) {
                    var listPosPlayer = System.String.split(mCheckPlayer, [95].map(function (i) {{ return String.fromCharCode(i); }}));
                    for (var i = 0; i < listPosPlayer.length; i = (i + 1) | 0) {
                        var listColumnRow = System.String.split(listPosPlayer[i], [44].map(function (i) {{ return String.fromCharCode(i); }}));
                        this.listInfoPlayer.add(new EntityInfoPlayer(System.Int32.parse(listColumnRow[0]), System.Int32.parse(listColumnRow[1]), (Bridge.referenceEquals(listColumnRow[2], "far") ? TYPE_PLAYER.ATK_FAR : (Bridge.referenceEquals(listColumnRow[2], "phep") ? TYPE_PLAYER.ATK_PHEP : TYPE_PLAYER.ATK_NEAR)), System.Int32.parse(listColumnRow[3])));
                    }
                }

                this.CreateGrid();

                //LoadItemLevelImg(PlayerPrefs.GetInt("level", 0));
                //listMap3DMoiTruong[0].SetActive(true);
                //for (int i = 0; i < listMap3DMoiTruong.Length; i++)
                //{
                //    if (i == indexImgMap)
                //        listMap3DMoiTruong[i].SetActive(true);
                //    else
                //        listMap3DMoiTruong[i].SetActive(false);
                //}
                //CurrentMapImg.sprite = listImageMap[indexImgMap];
                //if (indexImgMap >= 4)
                //    NextMapImg.sprite = listImageMap[0];
                //else
                //    NextMapImg.sprite = listImageMap[indexImgMap + 1];
            },
            /*CreateGridPlayer.Start end.*/

            /*CreateGridPlayer.CreateBossByIndex start.*/
            CreateBossByIndex: function (indexLevel) {
if ( TRACE ) { TRACE( "CreateGridPlayer#CreateBossByIndex", this ); }

                var boss = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.listBoss, new pc.Vec3( 0, 0.82, 2.62 ), new pc.Quat().setFromEulerAngles_Unity( 0, 180, 0 ));
                boss.name = "Boss";
                boss.tag = "Enemy";
                boss.GetComponent(PlayerController).isEnemy = true;
                boss.GetComponent(PlayerController).typePlayer = TYPE_PLAYER.ATK_NEAR;
                boss.GetComponent(PlayerController).indexLevel = indexLevel;
                boss.GetComponent(PlayerController).indexColumn = -1;
                boss.GetComponent(PlayerController).indexRow = -1;
                boss.GetComponent(PlayerController).LoadPlayer();
                boss.transform.SetParent(this.ParentListPlayer, true);
                this.listAllEnemy.add(boss);
            },
            /*CreateGridPlayer.CreateBossByIndex end.*/

            /*CreateGridPlayer.FormatNumber start.*/
            FormatNumber: function (num) {
if ( TRACE ) { TRACE( "CreateGridPlayer#FormatNumber", this ); }

                // Ensure number has max 3 significant digits (no rounding up can happen)
                var i = Bridge.Int.clip64(Math.pow(10, Bridge.Int.clip32(Math.max(0, Bridge.Math.logWithBase(System.Int64.toNumber(num), 10.0) - 2))));
                num = num.div(i).mul(i);

                if (num.gte(System.Int64(1000000000))) {
                    return (System.Double.format((num / 1000000000.0), "0.##") || "") + "B";
                }
                if (num.gte(System.Int64(1000000))) {
                    return (System.Double.format((num / 1000000.0), "0.##") || "") + "M";
                }
                if (num.gte(System.Int64(1000))) {
                    return (System.Double.format((num / 1000.0), "0.##") || "") + "K";
                }

                return num.toString("#,0");
            },
            /*CreateGridPlayer.FormatNumber end.*/

            /*CreateGridPlayer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#Update", this ); }

                if (this.isLoseGame || this.isWinGame) {
                    return;
                }

                if (this.listAllPlayer.Count <= 0) {
                    this.isLoseGame = true;
                    for (var i = 0; i < this.listAllEnemy.Count; i = (i + 1) | 0) {
                        this.listAllEnemy.getItem(i).GetComponent(PlayerController).animator.SetTrigger$1("TriggerWin");
                    }

                    this.StartCoroutine$1(this.waitShowWinGame());
                } else if (this.listAllEnemy.Count <= 0) {
                    this.isWinGame = true;
                    for (var i1 = 0; i1 < this.listAllPlayer.Count; i1 = (i1 + 1) | 0) {
                        this.listAllPlayer.getItem(i1).GetComponent(PlayerController).animator.SetTrigger$1("TriggerWin");
                    }

                    if (!this.Confetti_WinGame.activeSelf) {
                        this.Confetti_WinGame.SetActive(true);
                    }
                    this.StartCoroutine$1(this.waitShowWinGame());
                }
            },
            /*CreateGridPlayer.Update end.*/

            /*CreateGridPlayer.waitShowWinGame start.*/
            waitShowWinGame: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#waitShowWinGame", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    if (this.isWinGame) {
                                            SoundManager.instance.WinGameSound();
                                        } else {
                                            SoundManager.instance.LoseGameSound();
                                        }


                                        if (this.isWinGame) {
                                            $step = 1;
                                            continue;
                                        } else  {
                                            $step = 3;
                                            continue;
                                        }
                                }
                                case 1: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(4.0);
                                        $step = 2;
                                        return true;
                                }
                                case 2: {
                                    //SceneManager.LoadScene(SceneManager.GetActiveScene().name);
                                        GameController.instance.EndCard();
                                        //WinGamePanel.SetActive(true);
                                    $step = 5;
                                    continue;
                                }
                                case 3: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(3.5);
                                        $step = 4;
                                        return true;
                                }
                                case 4: {
                                    //SceneManager.LoadScene(SceneManager.GetActiveScene().name);
                                        GameController.instance.EndCard();
                                        //LoseGamePanel.SetActive(true);
                                    $step = 5;
                                    continue;
                                }
                                case 5: {

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*CreateGridPlayer.waitShowWinGame end.*/

            /*CreateGridPlayer.CheckExistUnlockedPlayerNear start.*/
            CheckExistUnlockedPlayerNear: function (index) {
if ( TRACE ) { TRACE( "CreateGridPlayer#CheckExistUnlockedPlayerNear", this ); }

                for (var i = 0; i < this.listUnlockedPlayerNear.Count; i = (i + 1) | 0) {
                    if (index === this.listUnlockedPlayerNear.getItem(i)) {
                        return true;
                    }
                }
                return false;
            },
            /*CreateGridPlayer.CheckExistUnlockedPlayerNear end.*/

            /*CreateGridPlayer.CheckExistUnlockedPlayerFar start.*/
            CheckExistUnlockedPlayerFar: function (index) {
if ( TRACE ) { TRACE( "CreateGridPlayer#CheckExistUnlockedPlayerFar", this ); }

                for (var i = 0; i < this.listUnlockedPlayerFar.Count; i = (i + 1) | 0) {
                    if (index === this.listUnlockedPlayerFar.getItem(i)) {
                        return true;
                    }
                }
                return false;
            },
            /*CreateGridPlayer.CheckExistUnlockedPlayerFar end.*/

            /*CreateGridPlayer.CheckExistUnlockedPlayerPhep start.*/
            CheckExistUnlockedPlayerPhep: function (index) {
if ( TRACE ) { TRACE( "CreateGridPlayer#CheckExistUnlockedPlayerPhep", this ); }

                for (var i = 0; i < this.listUnlockedPlayerPhep.Count; i = (i + 1) | 0) {
                    if (index === this.listUnlockedPlayerPhep.getItem(i)) {
                        return true;
                    }
                }
                return false;
            },
            /*CreateGridPlayer.CheckExistUnlockedPlayerPhep end.*/

            /*CreateGridPlayer.CreateGrid start.*/
            CreateGrid: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#CreateGrid", this ); }

                this.GameGrid = System.Array.create(null, null, UnityEngine.GameObject, this.numberColumn, this.numberRow);
                var sizeRow = 0.2;
                var sizeCol = 0.333333343;
                for (var i = 0; i < this.numberColumn; i = (i + 1) | 0) {
                    for (var j = 0; j < this.numberRow; j = (j + 1) | 0) {
                        this.GameGrid.set([i, j], UnityEngine.Object.Instantiate(UnityEngine.GameObject, this.ObjectGroundGrid));
                        this.GameGrid.get([i, j]).transform.position = new pc.Vec3( i * sizeRow, 0, j * sizeCol );
                        this.GameGrid.get([i, j]).transform.SetParent(this.transform, false);
                        this.GameGrid.get([i, j]).gameObject.name = "Ground (" + i + "," + j + ")";

                        var info = this.GetInfoPlayerFromList(i, j);
                        if (info != null) {
                            var player;
                            if (info.typePlayer === TYPE_PLAYER.ATK_PHEP) {
                                player = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.listPlayerPhep[info.indexLevel], new pc.Vec3( this.GameGrid.get([i, j]).transform.position.x, 0.77, this.GameGrid.get([i, j]).transform.position.z ), pc.Quat.IDENTITY.clone());
                            } else if (info.typePlayer === TYPE_PLAYER.ATK_FAR) {
                                player = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.listPlayerFar[info.indexLevel], new pc.Vec3( this.GameGrid.get([i, j]).transform.position.x, 0.77, this.GameGrid.get([i, j]).transform.position.z ), pc.Quat.IDENTITY.clone());
                            } else {
                                player = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.listPlayerNear[info.indexLevel], new pc.Vec3( this.GameGrid.get([i, j]).transform.position.x, 0.77, this.GameGrid.get([i, j]).transform.position.z ), pc.Quat.IDENTITY.clone());
                            }

                            player.GetComponent(PlayerController).typePlayer = info.typePlayer;
                            player.GetComponent(PlayerController).indexLevel = info.indexLevel;
                            player.GetComponent(PlayerController).indexColumn = i;
                            player.GetComponent(PlayerController).indexRow = j;
                            player.GetComponent(PlayerController).LoadPlayer();
                            player.transform.SetParent(this.ParentListPlayer, true);

                            this.listAllPlayer.add(player);
                        }

                        var index = 0;
                        if (j === 0) {
                            index = i;
                        } else {
                            if (j === 1) {
                                index = (5 + i) | 0;
                            } else {
                                if (j === 2) {
                                    index = (10 + i) | 0;
                                }
                            }
                        }
                        this.GameGrid.get([i, j]).GetComponent(ItemGridControl).Index = index;
                        this.GameGrid.get([i, j]).GetComponent(ItemGridControl).indexColumn = i;
                        this.GameGrid.get([i, j]).GetComponent(ItemGridControl).indexRow = j;
                    }
                }
            },
            /*CreateGridPlayer.CreateGrid end.*/

            /*CreateGridPlayer.GetInfoPlayerFromList start.*/
            GetInfoPlayerFromList: function (column, row) {
if ( TRACE ) { TRACE( "CreateGridPlayer#GetInfoPlayerFromList", this ); }

                for (var i = 0; i < this.listInfoPlayer.Count; i = (i + 1) | 0) {
                    if (this.listInfoPlayer.getItem(i).indexColumn === column && this.listInfoPlayer.getItem(i).indexRow === row) {
                        return this.listInfoPlayer.getItem(i);
                    }
                }

                return null;
            },
            /*CreateGridPlayer.GetInfoPlayerFromList end.*/

            /*CreateGridPlayer.SaveInfoPlayer start.*/
            SaveInfoPlayer: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#SaveInfoPlayer", this ); }

                var chuoi = "";
                for (var i = 0; i < this.listInfoPlayer.Count; i = (i + 1) | 0) {
                    var info = this.listInfoPlayer.getItem(i);
                    if (i !== ((this.listInfoPlayer.Count - 1) | 0)) {
                        chuoi = (chuoi || "") + ((info.indexColumn + "," + info.indexRow + "," + ((info.typePlayer === TYPE_PLAYER.ATK_FAR ? "far," : (info.typePlayer === TYPE_PLAYER.ATK_PHEP ? "phep," : "near,")) || "") + info.indexLevel + "_") || "");
                    } else {
                        chuoi = (chuoi || "") + ((info.indexColumn + "," + info.indexRow + "," + ((info.typePlayer === TYPE_PLAYER.ATK_FAR ? "far," : (info.typePlayer === TYPE_PLAYER.ATK_PHEP ? "phep," : "near,")) || "") + info.indexLevel) || "");
                    }

                }
                UnityEngine.PlayerPrefs.SetString("ListContainerPlayer", chuoi);
            },
            /*CreateGridPlayer.SaveInfoPlayer end.*/

            /*CreateGridPlayer.PressFight start.*/
            PressFight: function () {
if ( TRACE ) { TRACE( "CreateGridPlayer#PressFight", this ); }

                SoundManager.instance.ClickAudioBtn();

                if (UnityEngine.PlayerPrefs.GetInt("Tutorial", 0) === 0) {
                    UnityEngine.PlayerPrefs.SetInt("Tutorial", 1);
                }
                this.Tutorial1.SetActive(false);
                this.isStartFight = true;
                for (var i = 0; i < this.listObjectButton.length; i = (i + 1) | 0) {
                    this.listObjectButton[i].SetActive(false);
                }
                for (var i1 = 0; i1 < this.numberColumn; i1 = (i1 + 1) | 0) {
                    for (var j = 0; j < this.numberRow; j = (j + 1) | 0) {
                        var cell = this.GameGrid.get([i1, j]);
                        cell.GetComponent(ItemGridControl).HideAllLineItem();
                    }
                }
            },
            /*CreateGridPlayer.PressFight end.*/


        }
    });
    /*CreateGridPlayer end.*/

    /*DragPlayer start.*/
    Bridge.define("DragPlayer", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            IndexCurrentGrid: 0,
            listSkinPlayer: null,
            UnlockedPlayerPanel: null,
            MainPanel: null,
            toDrag: null,
            distance: null,
            isMouseDragging: false,
            target: null,
            playerDel: null,
            tempPosPlayer: null,
            firstInteractionDone: false,
            isTutorialStep1: false,
            isTutorialStep2: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "DragPlayer#init", this ); }

                this.toDrag = new UnityEngine.Vector3();
                this.distance = new UnityEngine.Vector3();
                this.tempPosPlayer = new UnityEngine.Vector3();
            }
        },
        methods: {
            /*DragPlayer.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "DragPlayer#Start", this ); }

                DragPlayer.instance = this;
            },
            /*DragPlayer.Start end.*/

            /*DragPlayer.ReturnClickedObject start.*/
            ReturnClickedObject: function (hit) {
if ( TRACE ) { TRACE( "DragPlayer#ReturnClickedObject", this ); }

                var targetObject = null;
                var ray = UnityEngine.Camera.main.ScreenPointToRay(UnityEngine.Input.mousePosition.$clone());
                if (UnityEngine.Physics.Raycast$3(ray.origin, ray.direction.$clone().clone().scale( 10 ), hit)) {
                    if (hit.v.collider.CompareTag("Player")) {
                        targetObject = hit.v.collider.gameObject;
                    }
                }
                return targetObject;
            },
            /*DragPlayer.ReturnClickedObject end.*/

            /*DragPlayer.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "DragPlayer#Update", this ); }

                var $t, $t1, $t2;
                if (!CreateGridPlayer.instance.isStartFight) {
                    var position = pc.Vec3.ZERO.clone();
                    position = UnityEngine.Input.mousePosition.$clone();

                    if (UnityEngine.Input.GetMouseButtonDown(0)) {
                        this.distance = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( position.x, position.y, UnityEngine.Camera.main.WorldToScreenPoint(this.transform.position).z )).sub( this.transform.position );

                        var hitInfo = { v : new UnityEngine.RaycastHit() };
                        this.target = this.ReturnClickedObject(hitInfo);
                        if (UnityEngine.GameObject.op_Inequality(this.target, null) && this.target.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(this.target.GetComponent(PlayerController), null)) {
                            this.tempPosPlayer = this.target.transform.position.$clone();
                            this.isMouseDragging = true;
                            this.target.GetComponent(PlayerController).isSelected = true;
                        }
                    }

                    var isMerged = false;

                    if (UnityEngine.Input.GetMouseButtonUp(0)) {
                        if (UnityEngine.GameObject.op_Inequality(this.target, null) && this.target.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(this.target.GetComponent(PlayerController), null)) {
                            if (!this.firstInteractionDone) {
                                this.firstInteractionDone = true;
                                this.isTutorialStep1 = false;
                                this.isTutorialStep2 = true;
                            }

                            var playerController = this.target.GetComponent(PlayerController);

                            if (playerController.isMovedPlayer) {
                                if (UnityEngine.GameObject.op_Inequality(playerController.CellSelectedObject, null)) {
                                    this.target.transform.position = this.toDrag.$clone();
                                    this.target.transform.position = new pc.Vec3( playerController.CellSelectedObject.transform.position.x, this.target.transform.position.y, playerController.CellSelectedObject.transform.position.z );

                                    var info = CreateGridPlayer.instance.GetInfoPlayerFromList(playerController.indexColumn, playerController.indexRow);

                                    if (UnityEngine.GameObject.op_Inequality(this.playerDel, null)) {
                                        if (UnityEngine.GameObject.op_Inequality(this.playerDel, null) && this.playerDel.GetComponent(PlayerController).typePlayer === playerController.typePlayer && this.playerDel.GetComponent(PlayerController).indexLevel === playerController.indexLevel && Bridge.referenceEquals(this.playerDel.name, playerController.gameObject.name)) {
                                            playerController.CellSelectedObject.GetComponent(ItemGridControl).listPlayerGrid = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();

                                            var info1 = CreateGridPlayer.instance.GetInfoPlayerFromList(this.playerDel.GetComponent(PlayerController).indexColumn, this.playerDel.GetComponent(PlayerController).indexRow);
                                            CreateGridPlayer.instance.listInfoPlayer.remove(info1);
                                            CreateGridPlayer.instance.listAllPlayer.remove(this.playerDel);

                                            if (info != null) {
                                                CreateGridPlayer.instance.listInfoPlayer.remove(info);
                                                CreateGridPlayer.instance.listAllPlayer.remove(this.target);

                                                playerController.indexColumn = playerController.CellSelectedObject.GetComponent(ItemGridControl).indexColumn;
                                                playerController.indexRow = playerController.CellSelectedObject.GetComponent(ItemGridControl).indexRow;
                                                info.indexColumn = playerController.indexColumn;
                                                info.indexRow = playerController.indexRow;
                                                info.indexLevel = (playerController.indexLevel + 1) | 0;
                                                CreateGridPlayer.instance.listInfoPlayer.add(info);
                                                CreateGridPlayer.instance.listAllPlayer.add(this.target);
                                            }

                                            if (this.playerDel.GetComponent(PlayerController).typePlayer === playerController.typePlayer && this.playerDel.GetComponent(PlayerController).indexLevel === playerController.indexLevel && this.playerDel.GetComponent(PlayerController).indexColumn === playerController.indexColumn && this.playerDel.GetComponent(PlayerController).indexRow === playerController.indexRow) {
                                                isMerged = true;
                                                SoundManager.instance.MergePlayerAudioBtn();
                                                UnityEngine.MonoBehaviour.Destroy(this.playerDel);
                                                this.playerDel = null;

                                                if (playerController.typePlayer === TYPE_PLAYER.ATK_PHEP) {
                                                    var tempController = playerController;
                                                    var player = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, ($t = CreateGridPlayer.instance.listPlayerPhep)[((tempController.indexLevel + 1) | 0)], tempController.transform.position.$clone(), pc.Quat.IDENTITY.clone());

                                                    player.GetComponent(PlayerController).typePlayer = TYPE_PLAYER.ATK_PHEP;
                                                    player.GetComponent(PlayerController).indexLevel = (tempController.indexLevel + 1) | 0;
                                                    player.GetComponent(PlayerController).indexColumn = tempController.indexColumn;
                                                    player.GetComponent(PlayerController).indexRow = tempController.indexRow;
                                                    player.GetComponent(PlayerController).LoadPlayer();

                                                    player.transform.SetParent(CreateGridPlayer.instance.ParentListPlayer, true);
                                                    CreateGridPlayer.instance.listAllPlayer.add(player);

                                                    UnityEngine.MonoBehaviour.Destroy(this.target);
                                                    CreateGridPlayer.instance.listAllPlayer.remove(this.target);

                                                    this.target = player;
                                                    playerController = player.GetComponent(PlayerController);

                                                    playerController.EffectMerge.SetActive(true);
                                                    this.StartCoroutine$1(this.waitHideEffectMerge(playerController));

                                                    if (playerController.typePlayer === TYPE_PLAYER.ATK_PHEP && !CreateGridPlayer.instance.CheckExistUnlockedPlayerPhep(playerController.indexLevel)) {
                                                        CreateGridPlayer.instance.listUnlockedPlayerPhep.add(playerController.indexLevel);
                                                        var rs = Bridge.toArray(CreateGridPlayer.instance.listUnlockedPlayerPhep.ToArray()).join(",");
                                                        UnityEngine.PlayerPrefs.SetString("ListUnlockedPlayerPhep", rs);
                                                    }
                                                } else if (playerController.typePlayer === TYPE_PLAYER.ATK_FAR) {
                                                    var tempController1 = playerController;
                                                    var player1 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, ($t1 = CreateGridPlayer.instance.listPlayerFar)[((tempController1.indexLevel + 1) | 0)], tempController1.transform.position.$clone(), pc.Quat.IDENTITY.clone());

                                                    player1.GetComponent(PlayerController).typePlayer = TYPE_PLAYER.ATK_FAR;
                                                    player1.GetComponent(PlayerController).indexLevel = (tempController1.indexLevel + 1) | 0;
                                                    player1.GetComponent(PlayerController).indexColumn = tempController1.indexColumn;
                                                    player1.GetComponent(PlayerController).indexRow = tempController1.indexRow;
                                                    player1.GetComponent(PlayerController).LoadPlayer();

                                                    player1.transform.SetParent(CreateGridPlayer.instance.ParentListPlayer, true);
                                                    CreateGridPlayer.instance.listAllPlayer.add(player1);

                                                    UnityEngine.MonoBehaviour.Destroy(this.target);
                                                    CreateGridPlayer.instance.listAllPlayer.remove(this.target);

                                                    this.target = player1;
                                                    playerController = player1.GetComponent(PlayerController);

                                                    playerController.EffectMerge.SetActive(true);
                                                    this.StartCoroutine$1(this.waitHideEffectMerge(playerController));

                                                    if (playerController.typePlayer === TYPE_PLAYER.ATK_FAR && !CreateGridPlayer.instance.CheckExistUnlockedPlayerFar(playerController.indexLevel)) {
                                                        CreateGridPlayer.instance.listUnlockedPlayerFar.add(playerController.indexLevel);
                                                        var rs1 = Bridge.toArray(CreateGridPlayer.instance.listUnlockedPlayerFar.ToArray()).join(",");
                                                        UnityEngine.PlayerPrefs.SetString("ListUnlockedPlayerFar", rs1);
                                                    }
                                                } else {
                                                    var tempController2 = playerController;
                                                    var player2 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, ($t2 = CreateGridPlayer.instance.listPlayerNear)[((tempController2.indexLevel + 1) | 0)], tempController2.transform.position.$clone(), pc.Quat.IDENTITY.clone());

                                                    player2.GetComponent(PlayerController).typePlayer = TYPE_PLAYER.ATK_NEAR;
                                                    player2.GetComponent(PlayerController).indexLevel = (tempController2.indexLevel + 1) | 0;
                                                    player2.GetComponent(PlayerController).indexColumn = tempController2.indexColumn;
                                                    player2.GetComponent(PlayerController).indexRow = tempController2.indexRow;
                                                    player2.GetComponent(PlayerController).LoadPlayer();

                                                    player2.transform.SetParent(CreateGridPlayer.instance.ParentListPlayer, true);
                                                    CreateGridPlayer.instance.listAllPlayer.add(player2);

                                                    UnityEngine.MonoBehaviour.Destroy(this.target);
                                                    CreateGridPlayer.instance.listAllPlayer.remove(this.target);

                                                    this.target = player2;
                                                    playerController = player2.GetComponent(PlayerController);

                                                    playerController.EffectMerge.SetActive(true);
                                                    this.StartCoroutine$1(this.waitHideEffectMerge(playerController));

                                                    if (playerController.typePlayer === TYPE_PLAYER.ATK_NEAR && !CreateGridPlayer.instance.CheckExistUnlockedPlayerNear(playerController.indexLevel)) {
                                                        CreateGridPlayer.instance.listUnlockedPlayerNear.add(playerController.indexLevel);
                                                        var rs2 = Bridge.toArray(CreateGridPlayer.instance.listUnlockedPlayerNear.ToArray()).join(",");
                                                        UnityEngine.PlayerPrefs.SetString("ListUnlockedPlayerNear", rs2);
                                                    }
                                                }
                                            } else {
                                                this.target.transform.position = this.tempPosPlayer.$clone();
                                            }
                                        } else {
                                            this.target.transform.position = this.tempPosPlayer.$clone();
                                        }
                                    } else {
                                        if (info != null) {
                                            CreateGridPlayer.instance.listInfoPlayer.remove(info);
                                            CreateGridPlayer.instance.listAllPlayer.remove(this.target);

                                            playerController.indexColumn = playerController.CellSelectedObject.GetComponent(ItemGridControl).indexColumn;
                                            playerController.indexRow = playerController.CellSelectedObject.GetComponent(ItemGridControl).indexRow;
                                            info.indexColumn = playerController.indexColumn;
                                            info.indexRow = playerController.indexRow;
                                            CreateGridPlayer.instance.listInfoPlayer.add(info);
                                            CreateGridPlayer.instance.listAllPlayer.add(this.target);
                                        }
                                    }

                                    if (!isMerged) {
                                        SoundManager.instance.MovePlayerAudioBtn();
                                        playerController.EffectMove.SetActive(false);
                                        playerController.EffectMove.SetActive(true);
                                    }


                                    if (UnityEngine.GameObject.op_Inequality(playerController.CellSelectedObject, null)) {
                                        playerController.CellSelectedObject.GetComponent(ItemGridControl).UnSelectItem();
                                    }

                                } else {
                                    this.target.transform.position = this.tempPosPlayer.$clone();
                                }
                            } else {
                                this.target.transform.position = this.tempPosPlayer.$clone();
                            }

                            playerController.isSelected = false;
                            CreateGridPlayer.instance.SaveInfoPlayer();
                        }

                        this.isMouseDragging = false;
                        if (UnityEngine.PlayerPrefs.GetInt("Tutorial", 0) === 0 && this.isTutorialStep2) {
                            CreateGridPlayer.instance.Tutorial1.SetActive(false);
                            CreateGridPlayer.instance.Tutorial3.SetActive(true);
                        }
                    }

                    if (this.isMouseDragging) {
                        if (UnityEngine.GameObject.op_Inequality(this.target, null) && this.target.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(this.target.GetComponent(PlayerController), null)) {
                            this.target.GetComponent(PlayerController).isSelected = true;
                            this.target.GetComponent(PlayerController).isMovedPlayer = true;
                            this.IndexCurrentGrid = this.target.GetComponent(PlayerController).indexGridCurrent;

                            var distance_to_screen = UnityEngine.Camera.main.WorldToScreenPoint(this.target.transform.position);
                            var pos_move = UnityEngine.Camera.main.ScreenToWorldPoint(new pc.Vec3( position.x, position.y, distance_to_screen.z ));
                            this.toDrag = new pc.Vec3( pos_move.x, this.target.transform.position.y, pos_move.z );

                            this.target.transform.localPosition = this.toDrag.$clone();
                        }
                    }
                }
            },
            /*DragPlayer.Update end.*/

            /*DragPlayer.waitHideEffectMerge start.*/
            waitHideEffectMerge: function (playerController) {
if ( TRACE ) { TRACE( "DragPlayer#waitHideEffectMerge", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(playerController, null)) {
                                            playerController.EffectMerge.SetActive(false);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DragPlayer.waitHideEffectMerge end.*/

            /*DragPlayer.waitHideEffectMove start.*/
            waitHideEffectMove: function (playerController) {
if ( TRACE ) { TRACE( "DragPlayer#waitHideEffectMove", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    if (UnityEngine.MonoBehaviour.op_Inequality(playerController, null)) {
                                            playerController.EffectMove.SetActive(false);
                                        }

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*DragPlayer.waitHideEffectMove end.*/


        }
    });
    /*DragPlayer end.*/

    /*EntityInfoPlayer start.*/
    Bridge.define("EntityInfoPlayer", {
        fields: {
            indexColumn: 0,
            indexRow: 0,
            typePlayer: 0,
            indexLevel: 0
        },
        ctors: {
            ctor: function (indexColumn, indexRow, typePlayer, indexLevel) {
if ( TRACE ) { TRACE( "EntityInfoPlayer#ctor", this ); }

                this.$initialize();
                this.indexColumn = indexColumn;
                this.indexRow = indexRow;
                this.typePlayer = typePlayer;
                this.indexLevel = indexLevel;
            }
        }
    });
    /*EntityInfoPlayer end.*/

    /*EntityPosPlayer start.*/
    Bridge.define("EntityPosPlayer", {
        fields: {
            indexColumn: 0,
            indexRow: 0
        },
        ctors: {
            ctor: function (indexColumn, indexRow) {
if ( TRACE ) { TRACE( "EntityPosPlayer#ctor", this ); }

                this.$initialize();
                this.indexColumn = indexColumn;
                this.indexRow = indexRow;
            }
        }
    });
    /*EntityPosPlayer end.*/

    /*FixedUI start.*/
    Bridge.define("FixedUI", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            tuto: null,
            fight: null,
            current_size: null,
            level: 0
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "FixedUI#init", this ); }

                this.current_size = System.Array.init([0, 0], System.Int32);
            }
        },
        methods: {
            /*FixedUI.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "FixedUI#Start", this ); }

                this.current_size[0] = UnityEngine.Screen.height;
                this.current_size[1] = UnityEngine.Screen.width;
                this.UpdateUI();
            },
            /*FixedUI.Start end.*/

            /*FixedUI.UpdateUI start.*/
            UpdateUI: function () {
if ( TRACE ) { TRACE( "FixedUI#UpdateUI", this ); }


                if (UnityEngine.Screen.height > UnityEngine.Screen.width) {
                    UnityEngine.Debug.Log$1("Portrait");
                    if (this.level === 1) {
                        this.tuto.localScale = new pc.Vec3( 1, 1, 1 );
                    } else {
                        this.tuto.localScale = new pc.Vec3( 1.3, 1.3, 1.3 );
                        this.tuto.anchoredPosition = UnityEngine.Vector2.FromVector3(new pc.Vec3( 120, -74, 0 ));
                    }
                    this.fight.anchoredPosition = UnityEngine.Vector2.FromVector3(new pc.Vec3( 0, 520, 0 ));
                } else {
                    UnityEngine.Debug.Log$1("Landscape");
                    this.tuto.localScale = new pc.Vec3( 0.7, 0.7, 0.7 );
                    if (this.level === 2) {
                        this.tuto.anchoredPosition = UnityEngine.Vector2.FromVector3(new pc.Vec3( 52, -35, 0 ));
                    }
                    this.fight.anchoredPosition = UnityEngine.Vector2.FromVector3(new pc.Vec3( 0, 85, 0 ));
                }
            },
            /*FixedUI.UpdateUI end.*/

            /*FixedUI.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "FixedUI#Update", this ); }

                if (UnityEngine.Screen.height !== this.current_size[0] || UnityEngine.Screen.width !== this.current_size[1]) {
                    this.current_size[0] = UnityEngine.Screen.height;
                    this.current_size[1] = UnityEngine.Screen.width;
                    this.UpdateUI();
                }
            },
            /*FixedUI.Update end.*/


        }
    });
    /*FixedUI end.*/

    /*GameController start.*/
    Bridge.define("GameController", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            level: null,
            lv1: null
        },
        methods: {
            /*GameController.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "GameController#Awake", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(GameController.instance, null)) {
                    GameController.instance = this;
                }
            },
            /*GameController.Awake end.*/

            /*GameController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "GameController#Start", this ); }

                this.lv1 = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.level[0], this.transform.position.$clone(), pc.Quat.IDENTITY.clone());
            },
            /*GameController.Start end.*/

            /*GameController.EndCard start.*/
            EndCard: function () {
if ( TRACE ) { TRACE( "GameController#EndCard", this ); }

                UnityEngine.MonoBehaviour.Destroy(this.lv1);
                //lv1.SetActive(false);
                UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.level[1], this.transform.position.$clone(), pc.Quat.IDENTITY.clone());
            },
            /*GameController.EndCard end.*/


        }
    });
    /*GameController end.*/

    /*GroundController start.*/
    Bridge.define("GroundController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isPlayer: false
        }
    });
    /*GroundController end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    Bridge.define("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", {
        inherits: [UnityEngine.MonoBehaviour]
    });
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*ItemGridControl start.*/
    Bridge.define("ItemGridControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            Index: 0,
            indexColumn: 0,
            indexRow: 0,
            isContainerPlayer: false,
            GroundMaterial: null,
            listGroundMaterial: null,
            layerMask: null,
            playerObjectToMerge: null,
            listPlayerGrid: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "ItemGridControl#init", this ); }

                this.layerMask = new UnityEngine.LayerMask();
                this.listPlayerGrid = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
            }
        },
        methods: {
            /*ItemGridControl.HideAllLineItem start.*/
            HideAllLineItem: function () {
if ( TRACE ) { TRACE( "ItemGridControl#HideAllLineItem", this ); }
 },
            /*ItemGridControl.HideAllLineItem end.*/

            /*ItemGridControl.UnSelectItem start.*/
            UnSelectItem: function () {
if ( TRACE ) { TRACE( "ItemGridControl#UnSelectItem", this ); }

                this.GroundMaterial.GetComponent(UnityEngine.MeshRenderer).material = this.listGroundMaterial[0];
            },
            /*ItemGridControl.UnSelectItem end.*/

            /*ItemGridControl.SelectedItem start.*/
            SelectedItem: function () {
if ( TRACE ) { TRACE( "ItemGridControl#SelectedItem", this ); }

                this.GroundMaterial.GetComponent(UnityEngine.MeshRenderer).material = this.listGroundMaterial[1];
            },
            /*ItemGridControl.SelectedItem end.*/

            /*ItemGridControl.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "ItemGridControl#OnTriggerExit", this ); }

                if (CreateGridPlayer.instance.isStartFight) {
                    return;
                }
                if (other.gameObject.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(other.gameObject.GetComponent(PlayerController), null)) {
                    if (UnityEngine.Object.op_Implicit(this.playerObjectToMerge) && UnityEngine.GameObject.op_Inequality(other.gameObject, this.playerObjectToMerge)) {
                        // Move dragged object from currently occupied cell
                        DragPlayer.instance.playerDel = this.playerObjectToMerge;
                        UnityEngine.Debug.Log$1("Di chuy\u1ec3n \u0111\u1ebfn \u00f4 \u0111ang b\u1ecb chi\u1ebfm");
                    } else {
                        // Move self from the current cell
                        this.playerObjectToMerge = null;
                        UnityEngine.Debug.Log$1("Di chuy\u1ec3n object t\u1eeb 1");
                    }
                }
            },
            /*ItemGridControl.OnTriggerExit end.*/

            /*ItemGridControl.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "ItemGridControl#OnTriggerStay", this ); }

                if (CreateGridPlayer.instance.isStartFight) {
                    return;
                }
                if (other.gameObject.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(other.gameObject.GetComponent(PlayerController), null)) {
                    if (!UnityEngine.Object.op_Implicit(this.playerObjectToMerge)) {
                        // Assign dragged object to the empty cell
                        this.playerObjectToMerge = other.gameObject;
                    } else {
                        if (UnityEngine.GameObject.op_Inequality(other.gameObject, this.playerObjectToMerge)) {
                            // Prepare for merging
                            DragPlayer.instance.playerDel = this.playerObjectToMerge;
                        }
                    }
                }
            },
            /*ItemGridControl.OnTriggerStay end.*/


        }
    });
    /*ItemGridControl end.*/

    /*LayerLab.PanelControlSimpleCasual start.*/
    Bridge.define("LayerLab.PanelControlSimpleCasual", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            page: 0,
            isReady: false,
            panelLight: null,
            panelDark: null,
            textTitle: null,
            panelTransformLight: null,
            panelTransformDark: null,
            buttonPrev: null,
            buttonNext: null,
            isDarakMode: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#init", this ); }

                this.panelLight = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.panelDark = new (System.Collections.Generic.List$1(UnityEngine.GameObject)).ctor();
                this.isDarakMode = false;
            }
        },
        methods: {
            /*LayerLab.PanelControlSimpleCasual.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#Start", this ); }

                var $t, $t1;
                this.textTitle = this.transform.GetComponentInChildren(TMPro.TextMeshProUGUI);
                this.buttonPrev.onClick.AddListener(Bridge.fn.cacheBind(this, this.Click_Prev));
                this.buttonNext.onClick.AddListener(Bridge.fn.cacheBind(this, this.Click_Next));

                $t = Bridge.getEnumerator(this.panelTransformLight);
                try {
                    while ($t.moveNext()) {
                        var t = Bridge.cast($t.Current, UnityEngine.Transform);
                        this.panelLight.add(t.gameObject);
                        t.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }

                $t1 = Bridge.getEnumerator(this.panelTransformDark);
                try {
                    while ($t1.moveNext()) {
                        var t1 = Bridge.cast($t1.Current, UnityEngine.Transform);
                        this.panelDark.add(t1.gameObject);
                        t1.gameObject.SetActive(false);
                    }
                } finally {
                    if (Bridge.is($t1, System.IDisposable)) {
                        $t1.System$IDisposable$Dispose();
                    }
                }

                this.panelLight.getItem(this.page).SetActive(true);
                this.panelDark.getItem(this.page).SetActive(true);

                this.isReady = true;

                this.CheckControl();
                this.SetMode();
            },
            /*LayerLab.PanelControlSimpleCasual.Start end.*/

            /*LayerLab.PanelControlSimpleCasual.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#Update", this ); }

                // if (panels.Count <= 0 || !isReady) return;
                if (!this.isReady) {
                    return;
                }

                if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.LeftArrow)) {
                    this.Click_Prev();
                } else {
                    if (UnityEngine.Input.GetKeyDown(UnityEngine.KeyCode.RightArrow)) {
                        this.Click_Next();
                    }
                }
            },
            /*LayerLab.PanelControlSimpleCasual.Update end.*/

            /*LayerLab.PanelControlSimpleCasual.Click_Prev start.*/
            Click_Prev: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#Click_Prev", this ); }

                if (this.page <= 0 || !this.isReady) {
                    return;
                }

                this.panelLight.getItem(this.page).SetActive(false);
                this.panelDark.getItem(this.page).SetActive(false);
                this.page = (this.page - 1) | 0;

                this.panelLight.getItem(this.page).SetActive(true);
                this.panelDark.getItem(this.page).SetActive(true);

                if (!this.isDarakMode) {
                    this.textTitle.text = this.panelLight.getItem(this.page).name;
                } else {
                    this.textTitle.text = this.panelDark.getItem(this.page).name;
                }

                this.CheckControl();
            },
            /*LayerLab.PanelControlSimpleCasual.Click_Prev end.*/

            /*LayerLab.PanelControlSimpleCasual.Click_Next start.*/
            Click_Next: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#Click_Next", this ); }

                if (this.page >= ((this.panelLight.Count - 1) | 0)) {
                    return;
                }


                this.panelLight.getItem(this.page).SetActive(false);
                this.panelDark.getItem(this.page).SetActive(false);
                this.page = (this.page + 1) | 0;

                this.panelLight.getItem(this.page).SetActive(true);
                this.panelDark.getItem(this.page).SetActive(true);
                this.CheckControl();
            },
            /*LayerLab.PanelControlSimpleCasual.Click_Next end.*/

            /*LayerLab.PanelControlSimpleCasual.SetArrowActive start.*/
            SetArrowActive: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#SetArrowActive", this ); }

                this.buttonPrev.gameObject.SetActive(this.page > 0);
                this.buttonNext.gameObject.SetActive(this.page < ((this.panelLight.Count - 1) | 0));
            },
            /*LayerLab.PanelControlSimpleCasual.SetArrowActive end.*/

            /*LayerLab.PanelControlSimpleCasual.CheckControl start.*/
            CheckControl: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#CheckControl", this ); }

                if (!this.isDarakMode) {
                    this.textTitle.text = System.String.replaceAll(this.panelLight.getItem(this.page).name, "_", " ");
                } else {
                    this.textTitle.text = System.String.replaceAll(this.panelDark.getItem(this.page).name, "_", " ");
                }

                this.SetArrowActive();
            },
            /*LayerLab.PanelControlSimpleCasual.CheckControl end.*/

            /*LayerLab.PanelControlSimpleCasual.Click_Mode start.*/
            Click_Mode: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#Click_Mode", this ); }

                this.isDarakMode = !this.isDarakMode;
                this.SetMode();
                this.CheckControl();

            },
            /*LayerLab.PanelControlSimpleCasual.Click_Mode end.*/

            /*LayerLab.PanelControlSimpleCasual.SetMode start.*/
            SetMode: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelControlSimpleCasual#SetMode", this ); }

                if (!this.isDarakMode) {
                    this.panelTransformLight.gameObject.SetActive(true);
                    this.panelTransformDark.gameObject.SetActive(false);
                } else {
                    this.panelTransformLight.gameObject.SetActive(false);
                    this.panelTransformDark.gameObject.SetActive(true);
                }
            },
            /*LayerLab.PanelControlSimpleCasual.SetMode end.*/


        }
    });
    /*LayerLab.PanelControlSimpleCasual end.*/

    /*LayerLab.PanelSimpleCasual start.*/
    Bridge.define("LayerLab.PanelSimpleCasual", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            otherPanels: null
        },
        methods: {
            /*LayerLab.PanelSimpleCasual.OnEnable start.*/
            OnEnable: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelSimpleCasual#OnEnable", this ); }

                for (var i = 0; i < this.otherPanels.length; i = (i + 1) | 0) {
                    this.otherPanels[i].SetActive(true);
                }
            },
            /*LayerLab.PanelSimpleCasual.OnEnable end.*/

            /*LayerLab.PanelSimpleCasual.OnDisable start.*/
            OnDisable: function () {
if ( TRACE ) { TRACE( "LayerLab.PanelSimpleCasual#OnDisable", this ); }

                for (var i = 0; i < this.otherPanels.length; i = (i + 1) | 0) {
                    this.otherPanels[i].SetActive(false);
                }
            },
            /*LayerLab.PanelSimpleCasual.OnDisable end.*/


        }
    });
    /*LayerLab.PanelSimpleCasual end.*/

    /*MuiTenControl start.*/
    Bridge.define("MuiTenControl", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            target: null,
            RootPlayer: null,
            isBoxCoin: false,
            indexLevel: 0,
            trail: null,
            listColorTrail: null,
            speedBullet: 0,
            isTrigger: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "MuiTenControl#init", this ); }

                this.speedBullet = 6.0;
            }
        },
        methods: {
            /*MuiTenControl.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "MuiTenControl#Start", this ); }

                this.trail.startColor = this.listColorTrail[this.indexLevel].$clone();
            },
            /*MuiTenControl.Start end.*/

            /*MuiTenControl.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "MuiTenControl#Update", this ); }

                if (UnityEngine.Component.op_Inequality(this.target, null)) {
                    if (this.isBoxCoin) {
                        this.transform.LookAt$2(new pc.Vec3( this.target.position.x, this.target.position.y, this.target.position.z ));
                    } else {
                        this.transform.LookAt$2(new pc.Vec3( this.target.position.x, this.target.position.y + 0.7, this.target.position.z ));
                    }
                    this.transform.Translate$1(new pc.Vec3( 0, 0, 1 ).clone().scale( this.speedBullet ).clone().scale( UnityEngine.Time.deltaTime ), UnityEngine.Space.Self);
                }
            },
            /*MuiTenControl.Update end.*/

            /*MuiTenControl.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "MuiTenControl#OnTriggerStay", this ); }

                if ((Bridge.referenceEquals(other.gameObject.tag, "Player") || Bridge.referenceEquals(other.gameObject.tag, "Enemy")) && !Bridge.referenceEquals(other.gameObject.tag, this.RootPlayer.gameObject.tag)) {
                    var playerController = other.gameObject.GetComponent(PlayerController);
                    if (UnityEngine.MonoBehaviour.op_Inequality(playerController, null) && !playerController.isDie && !this.isTrigger) {
                        this.GetComponent(UnityEngine.Collider).enabled = false;
                        this.isTrigger = true;
                        playerController.currentHp -= playerController.listDamageFar_PlayerByLevel[this.RootPlayer.GetComponent(PlayerController).indexLevel]; //long9
                        if (playerController.isEnemy || playerController.isBoxCoin) {
                            //playerController.GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[playerController.indexLevel] + "$";
                            //playerController.GiftCoin_Txt.gameObject.SetActive(true);
                            //playerController.GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                            //StartCoroutine(waitHideGiftCoin(playerController));
                            // Coin
                            //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[playerController.indexLevel];
                            //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[playerController.indexLevel];
                            //CreateGridPlayer.instance.Coin_Txt.text =
                            //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                            //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                        }
                        if (playerController.isBoxCoin) {
                            this.Destroy(this.gameObject, 0.4);
                        } else {
                            this.Destroy(this.gameObject, 0.2);
                        }
                    }

                    UnityEngine.MonoBehaviour.Destroy(this.gameObject); //ri2
                }
            },
            /*MuiTenControl.OnTriggerStay end.*/


        }
    });
    /*MuiTenControl end.*/

    /*PlayerController start.*/
    Bridge.define("PlayerController", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            isEnemy: false,
            isBoss: false,
            isBoxCoin: false,
            isDie: false,
            typePlayer: 0,
            indexLevel: 0,
            indexColumn: 0,
            indexRow: 0,
            EffectMerge: null,
            EffectMove: null,
            animator: null,
            currentWeapon: null,
            listScalePlayerByLevel: null,
            listHP_PlayerNearByLevel: null,
            listHP_PlayerFarByLevel: null,
            listDamageNear_PlayerByLevel: null,
            listDamageFar_PlayerByLevel: null,
            HP_Player: null,
            HP_Enemy: null,
            MaxHP: 0,
            currentHp: 0,
            isMovedPlayer: false,
            isSelected: false,
            indexGridCurrent: 0,
            CellSelectedObject: null,
            isTriggerGrid: false,
            MuiTen: null,
            listColliderAttackBoss: null,
            Collider_RightHand: null,
            nearPlayer: null,
            timerArcher: 0,
            MaxTimerArcher: 0,
            isAttackArcherFirst: false,
            isCollisionPlayer: false,
            isArcherAtk: false
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "PlayerController#init", this ); }

                this.MaxHP = 1.0;
                this.isMovedPlayer = true;
                this.MaxTimerArcher = 1.5;
                this.isAttackArcherFirst = true;
            }
        },
        methods: {
            /*PlayerController.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "PlayerController#Start", this ); }

                if (this.typePlayer === TYPE_PLAYER.ATK_NEAR) {
                    var listCol = this.GetComponentsInChildren(UnityEngine.Collider);
                    for (var i = 0; i < listCol.length; i = (i + 1) | 0) {
                        if (System.String.contains(listCol[i].gameObject.name.toLowerCase(),"righthand")) {
                            this.Collider_RightHand = listCol[i];
                            this.Collider_RightHand.enabled = false;
                            break;
                        }
                    }
                }

                //for (int i = 0; i < listHP_PlayerNearByLevel.Length; i++)
                //{
                //    if (i > 0)
                //    {               
                //        listDamageNear_PlayerByLevel[i] = listDamageNear_PlayerByLevel[i - 1] * 2.75f; //- listDamageNear_PlayerByLevel[i - 1] * 0.65f;

                //        if (typePlayer == TYPE_PLAYER.ATK_FAR)
                //            listDamageFar_PlayerByLevel[i] = listDamageFar_PlayerByLevel[i - 1] * (i * 2) * 90 / 100; //- listDamageFar_PlayerByLevel[i - 1] * 0.65f;
                //        else
                //            listDamageFar_PlayerByLevel[i] = listDamageFar_PlayerByLevel[i - 1] * (i * 2) * 100 / 100; // Damage Phép

                //        listHP_PlayerFarByLevel[i] = listDamageFar_PlayerByLevel[i] * 16.5f * i * 4;
                //    }
                //    else
                //        listHP_PlayerFarByLevel[i] = listDamageFar_PlayerByLevel[i] * 16.5f;

                //    listHP_PlayerNearByLevel[i] = listHP_PlayerFarByLevel[i] * 3f;
                //    //listCoinGift_PlayerByLevel[i] = listCoinGift_PlayerByLevel[i] * 2;
                //}
            },
            /*PlayerController.Start end.*/

            /*PlayerController.LoadPlayer start.*/
            LoadPlayer: function () {
if ( TRACE ) { TRACE( "PlayerController#LoadPlayer", this ); }

                this.indexGridCurrent = (Bridge.Int.mul(this.indexRow, 5) + this.indexColumn) | 0;
                if (!this.isEnemy) {
                    this.HP_Player.SetActive(true);
                    this.HP_Enemy.SetActive(false);
                    this.HP_Player.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = 1.0;
                } else {
                    this.HP_Player.SetActive(false);
                    this.HP_Enemy.SetActive(true);
                    this.HP_Enemy.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = 1.0;
                }

                if (this.isBoxCoin) {
                    this.HP_Player.SetActive(false);
                    this.HP_Enemy.SetActive(true);
                    this.HP_Enemy.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = 1.0;
                }

                if (this.typePlayer === TYPE_PLAYER.ATK_NEAR) {
                    this.MaxHP = this.listHP_PlayerNearByLevel[0];
                    this.currentHp = this.MaxHP;
                    if (!this.isBoss && !this.isBoxCoin) {
                        if (this.isEnemy) {
                            this.currentWeapon.tag = "Enemy";
                        } else {
                            this.currentWeapon.tag = "Player";
                        }
                    } else if (this.isBoss) {
                        for (var i = 0; i < this.listColliderAttackBoss.length; i = (i + 1) | 0) {
                            this.listColliderAttackBoss[i].SetActive(true);
                        }
                    }
                } else if (this.typePlayer === TYPE_PLAYER.ATK_FAR) {
                    this.MaxHP = this.listHP_PlayerFarByLevel[0];
                    this.currentHp = this.MaxHP;
                } else if (this.typePlayer === TYPE_PLAYER.ATK_PHEP) {
                    this.MaxHP = this.listHP_PlayerFarByLevel[0];
                    this.currentHp = this.MaxHP;
                }

                if (!this.isBoss) {
                    this.transform.localScale = new pc.Vec3( this.listScalePlayerByLevel[0], this.listScalePlayerByLevel[0], this.listScalePlayerByLevel[0] );
                }
            },
            /*PlayerController.LoadPlayer end.*/

            /*PlayerController.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "PlayerController#Update", this ); }

                if (CreateGridPlayer.instance.isStartFight) {
                    if (this.typePlayer === TYPE_PLAYER.ATK_NEAR && UnityEngine.Component.op_Inequality(this.Collider_RightHand, null)) {
                        this.Collider_RightHand.enabled = true;
                    }

                    if (this.isDie) {
                        return;
                    }
                    if (this.currentHp <= 0) {
                        this.isDie = true;
                        this.StartCoroutine$1(this.waitdestroyBoxCollider());
                        //for (int i = 0; i < listEffect.Length; i++)
                        //{
                        //    listEffect[i].SetActive(false);
                        //}
                        if (this.isEnemy || this.isBoxCoin) {
                            this.HP_Enemy.SetActive(false);
                            CreateGridPlayer.instance.listAllEnemy.remove(this.gameObject);

                            if (this.isBoxCoin) {
                                UnityEngine.MonoBehaviour.Destroy(this.gameObject);
                            }
                        } else {
                            this.HP_Player.SetActive(false);
                            CreateGridPlayer.instance.listAllPlayer.remove(this.gameObject);
                        }

                        //GiftCoin_Txt.gameObject.SetActive(false);

                        if (UnityEngine.Component.op_Inequality(this.animator, null)) {
                            this.animator.SetTrigger$1("TriggerDie");
                        }
                        if (this.typePlayer === TYPE_PLAYER.ATK_NEAR) {
                            SoundManager.instance.StopRunnerAudioBtn();
                        }
                        if (!this.isEnemy) {
                            SoundManager.instance.DieAudioBtn();
                        }

                        return;
                    }

                    if (this.isEnemy || this.isBoxCoin) {
                        this.HP_Enemy.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = this.currentHp / this.MaxHP;
                        this.nearPlayer = this.GetClosestEnemy(CreateGridPlayer.instance.listAllPlayer.ToArray());
                    } else {
                        this.HP_Player.transform.GetChild(0).GetComponent(UnityEngine.UI.Image).fillAmount = this.currentHp / this.MaxHP;
                        this.nearPlayer = this.GetClosestEnemy(CreateGridPlayer.instance.listAllEnemy.ToArray());
                    }

                    if (this.typePlayer === TYPE_PLAYER.ATK_FAR && UnityEngine.Component.op_Inequality(this.nearPlayer, null)) {

                        if (this.isAttackArcherFirst) {
                            this.animator.SetBool$1("isArcher", true);
                            if (!this.isEnemy) {
                                SoundManager.instance.FarAttackAudioBtn();
                            }
                            this.ArcherShooter();
                            UnityEngine.Debug.Log$1("first shoot");
                            this.isAttackArcherFirst = false;
                        } else {
                            this.timerArcher += UnityEngine.Time.deltaTime;
                            if (this.timerArcher >= this.MaxTimerArcher) {
                                this.animator.SetBool$1("isArcher", true);
                                if (!this.isEnemy) {
                                    SoundManager.instance.FarAttackAudioBtn();
                                }
                                this.ArcherShooter();
                                UnityEngine.Debug.Log$1("shoot");
                                this.timerArcher = 0;
                            } else {
                                this.animator.SetBool$1("isArcher", false);
                            }
                        }

                        //Vector3 toTarget = nearPlayer.transform.position - transform.position;
                        this.transform.LookAt$2(this.nearPlayer.transform.position.$clone());
                        if (this.isEnemy) {
                            this.HP_Enemy.transform.eulerAngles = new pc.Vec3( 0, 0, 0 );
                        } else {
                            this.HP_Player.transform.eulerAngles = new pc.Vec3( 0, 0, 0 );
                        }
                    }

                    if (this.typePlayer === TYPE_PLAYER.ATK_PHEP && UnityEngine.Component.op_Inequality(this.nearPlayer, null)) {
                        if (this.isAttackArcherFirst) {
                            this.animator.SetBool$1("isPhepATK", true);
                            if (!this.isEnemy) {
                                SoundManager.instance.FarAttackAudioBtn();
                            }
                            this.isAttackArcherFirst = false;
                        } else {
                            this.timerArcher += UnityEngine.Time.deltaTime;
                            if (this.timerArcher >= this.MaxTimerArcher) {
                                this.animator.SetBool$1("isPhepATK", true);
                                if (!this.isEnemy) {
                                    SoundManager.instance.FarAttackAudioBtn();
                                }
                                this.timerArcher = 0;
                            } else {
                                this.animator.SetBool$1("isPhepATK", false);
                            }
                        }

                        //Vector3 toTarget = nearPlayer.transform.position - transform.position;
                        this.transform.LookAt$2(this.nearPlayer.transform.position.$clone());
                        if (this.isEnemy) {
                            this.HP_Enemy.transform.eulerAngles = new pc.Vec3( 0, 0, 0 );
                        } else {
                            this.HP_Player.transform.eulerAngles = new pc.Vec3( 0, 0, 0 );
                        }
                    }

                    if (this.typePlayer === TYPE_PLAYER.ATK_NEAR && UnityEngine.Component.op_Inequality(this.nearPlayer, null) && !this.isBoxCoin) {
                        var offsetSpace = 0.9;
                        if (this.isBoss) {
                            offsetSpace = 1.2;
                        }

                        if (pc.Vec3.distance( this.transform.position, this.nearPlayer.position ) > offsetSpace) {
                            if (!this.isEnemy) {
                                if (this.currentHp > 0) {
                                    SoundManager.instance.RunnerAudioBtn();
                                } else {
                                    SoundManager.instance.StopRunnerAudioBtn();
                                }
                            }

                            this.animator.SetBool$1("isRun", true);
                            this.animator.SetBool$1("isAttack", false);

                            this.transform.LookAt$2(this.nearPlayer.transform.position.$clone());
                            var toTarget = this.nearPlayer.transform.position.$clone().sub( this.transform.position );
                            this.transform.Translate$1(toTarget.clone().scale( 0.6 * UnityEngine.Time.deltaTime ), UnityEngine.Space.World); //ri2
                        } else {
                            if (!this.isEnemy) {
                                SoundManager.instance.StopRunnerAudioBtn();
                                SoundManager.instance.NearAttackAudioBtn();
                            }

                            this.animator.SetBool$1("isRun", false);
                            this.animator.SetBool$1("isAttack", true);
                        }

                        if (this.isEnemy) {
                            this.HP_Enemy.transform.eulerAngles = new pc.Vec3( 0, 0, 0 );
                        } else {
                            this.HP_Player.transform.eulerAngles = new pc.Vec3( 0, 0, 0 );
                        }
                    }
                }
            },
            /*PlayerController.Update end.*/

            /*PlayerController.GetClosestEnemy start.*/
            GetClosestEnemy: function (enemies) {
if ( TRACE ) { TRACE( "PlayerController#GetClosestEnemy", this ); }

                var $t;
                var tMin = null;
                var minDist = window.Infinity;
                var currentPos = this.transform.position.$clone();
                $t = Bridge.getEnumerator(enemies);
                try {
                    while ($t.moveNext()) {
                        var t = $t.Current;
                        if (UnityEngine.GameObject.op_Inequality(t, null) && !t.GetComponent(PlayerController).isDie) {
                            var dist = pc.Vec3.distance( t.transform.position, currentPos );
                            if (dist < minDist) {
                                tMin = t.transform;
                                minDist = dist;
                            }
                        }
                    }
                } finally {
                    if (Bridge.is($t, System.IDisposable)) {
                        $t.System$IDisposable$Dispose();
                    }
                }
                return tMin;
            },
            /*PlayerController.GetClosestEnemy end.*/

            /*PlayerController.OnTriggerStay start.*/
            OnTriggerStay: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnTriggerStay", this ); }

                if (this.isTriggerGrid) {
                    return;
                }
                this.GetComponent(UnityEngine.Rigidbody).WakeUp();

                if (other.CompareTag("Grid")) {
                    //if (PlayerPrefs.GetInt("Tutorial", 0) == 0 )
                    //{
                    //    if (!DragPlayer.instance.isTutorialStep1)
                    //    {
                    //        return;
                    //    }
                    //}

                    if (this.isSelected && this.isMovedPlayer) {
                        other.gameObject.GetComponent(ItemGridControl).SelectedItem();
                        this.indexGridCurrent = other.gameObject.GetComponent(ItemGridControl).Index;
                        this.CellSelectedObject = other.gameObject;
                        this.isTriggerGrid = true;
                        return;
                    } else if (this.isCollisionPlayer) {
                    } else {
                        this.isMovedPlayer = false;
                        other.gameObject.GetComponent(ItemGridControl).UnSelectItem();
                    }

                    this.CellSelectedObject = null; //long8
                    //isMovedPlayer = true;
                }
            },
            /*PlayerController.OnTriggerStay end.*/

            /*PlayerController.OnTriggerEnter start.*/
            OnTriggerEnter: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnTriggerEnter", this ); }

                this.GetComponent(UnityEngine.Rigidbody).WakeUp();

                if (CreateGridPlayer.instance.isStartFight && !this.isDie && !other.gameObject.CompareTag(this.gameObject.tag) && (UnityEngine.Component.op_Inequality(this.nearPlayer, null) && UnityEngine.GameObject.op_Equality(other.gameObject, this.nearPlayer.gameObject))) {
                    this.hitDamage(); //ri2
                    if (this.isEnemy) {
                        if (other.gameObject.CompareTag("Player")) {
                            var playerController = other.gameObject.GetComponent(PlayerController);
                            if (UnityEngine.MonoBehaviour.op_Inequality(playerController, null) && !playerController.isDie) {
                                playerController.currentHp -= this.listDamageNear_PlayerByLevel[0];
                                //GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[0] + "$";
                                //GiftCoin_Txt.gameObject.SetActive(true);
                                //GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0);
                                //StartCoroutine(waitHideGiftCoin());
                            }
                        }
                    } else {
                        if ((other.gameObject.CompareTag("Enemy") && System.String.contains(other.gameObject.name,"Enemy")) || (other.gameObject.CompareTag("Enemy") && System.String.contains(other.gameObject.name,"BoxFarm"))) {
                            var playerController1 = other.gameObject.GetComponent(PlayerController);
                            if (UnityEngine.MonoBehaviour.op_Inequality(playerController1, null) && !playerController1.isDie) {
                                playerController1.currentHp -= this.listDamageNear_PlayerByLevel[0];

                                //GiftCoin_Txt.text = playerController.listCoinGift_PlayerByLevel[0] + "$";
                                //if (!isBoxCoin)
                                //    GiftCoin_Txt.gameObject.SetActive(false);
                                //else
                                //    GiftCoin_Txt.gameObject.SetActive(true);
                                //GiftCoin_Txt.transform.eulerAngles = new Vector3(0, 0, 0); 
                                //StartCoroutine(waitHideGiftCoin());

                                // Coin
                                //CreateGridPlayer.instance.coinGame += (long)playerController.listCoinGift_PlayerByLevel[0];
                                //CreateGridPlayer.instance.CoinGetInLevel += (long)playerController.listCoinGift_PlayerByLevel[0];
                                //CreateGridPlayer.instance.Coin_Txt.text =
                                //    CreateGridPlayer.instance.FormatNumber(CreateGridPlayer.instance.coinGame);
                                //PlayerPrefs.SetString("mCoin", CreateGridPlayer.instance.coinGame.ToString());
                            }
                        }
                    }
                }
            },
            /*PlayerController.OnTriggerEnter end.*/

            /*PlayerController.OnTriggerExit start.*/
            OnTriggerExit: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnTriggerExit", this ); }

                this.GetComponent(UnityEngine.Rigidbody).WakeUp();
                if (other.gameObject.CompareTag("Grid")) {
                    this.CellSelectedObject = null;
                    other.gameObject.GetComponent(ItemGridControl).UnSelectItem();
                    other.gameObject.GetComponent(ItemGridControl).listPlayerGrid.remove(this.gameObject);
                    DragPlayer.instance.playerDel = null;
                    this.isTriggerGrid = false;
                }
            },
            /*PlayerController.OnTriggerExit end.*/

            /*PlayerController.OnCollisionStay start.*/
            OnCollisionStay: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnCollisionStay", this ); }

                this.GetComponent(UnityEngine.Rigidbody).WakeUp();
                if (other.gameObject.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(other.gameObject.GetComponent(PlayerController), null)) {
                    if (UnityEngine.MonoBehaviour.op_Inequality(other.gameObject.GetComponent(PlayerController), null) && other.gameObject.GetComponent(PlayerController).typePlayer === this.typePlayer && other.gameObject.GetComponent(PlayerController).indexLevel === this.indexLevel) {
                        this.isCollisionPlayer = true;
                    } else {
                        this.isCollisionPlayer = false;
                        this.isMovedPlayer = false;
                    }
                } else if (!this.isTriggerGrid) {
                    this.isMovedPlayer = false;
                }
            },
            /*PlayerController.OnCollisionStay end.*/

            /*PlayerController.OnCollisionExit start.*/
            OnCollisionExit: function (other) {
if ( TRACE ) { TRACE( "PlayerController#OnCollisionExit", this ); }

                this.GetComponent(UnityEngine.Rigidbody).WakeUp();
                if (other.gameObject.CompareTag("Player") && UnityEngine.MonoBehaviour.op_Inequality(other.gameObject.GetComponent(PlayerController), null)) {
                    this.isCollisionPlayer = false;
                    DragPlayer.instance.playerDel = null;
                }
            },
            /*PlayerController.OnCollisionExit end.*/

            /*PlayerController.ArcherShooter start.*/
            ArcherShooter: function () {
if ( TRACE ) { TRACE( "PlayerController#ArcherShooter", this ); }

                if (UnityEngine.Component.op_Inequality(this.nearPlayer, null)) {
                    var bullet;
                    /* transform.position = transform.position + new Vector3(Time.deltaTime, verticalInput * movementSpeed * Time.deltaTime, 0*/
                    bullet = UnityEngine.Object.Instantiate$2(UnityEngine.GameObject, this.MuiTen, this.currentWeapon.transform.position.$clone(), this.currentWeapon.transform.rotation.$clone());
                    var bulletGun = bullet.GetComponent(ControlChuong); //ri
                    bulletGun.isBoxCoin = this.isBoxCoin;
                    bulletGun.target = this.nearPlayer;
                    bulletGun.RootPlayer = this.gameObject;
                    bulletGun.indexLevel = this.indexLevel;
                }
            },
            /*PlayerController.ArcherShooter end.*/

            /*PlayerController.hitChuong start.*/
            hitChuong: function () {
if ( TRACE ) { TRACE( "PlayerController#hitChuong", this ); }

                //hitChuongEffect.SetActive(true);
                //StartCoroutine(waithidehitChuong());
            },
            /*PlayerController.hitChuong end.*/

            /*PlayerController.hitDamage start.*/
            hitDamage: function () {
if ( TRACE ) { TRACE( "PlayerController#hitDamage", this ); }

                //hitDamageEffect.SetActive(true);
                //StartCoroutine(waithidehitDamage());
            },
            /*PlayerController.hitDamage end.*/

            /*PlayerController.waitdestroyBoxCollider start.*/
            waitdestroyBoxCollider: function () {
if ( TRACE ) { TRACE( "PlayerController#waitdestroyBoxCollider", this ); }

                var $step = 0,
                    $jumpFromFinally,
                    $returnValue,
                    $async_e;

                var $enumerator = new Bridge.GeneratorEnumerator(Bridge.fn.bind(this, function () {
                    try {
                        for (;;) {
                            switch ($step) {
                                case 0: {
                                    $enumerator.current = new UnityEngine.WaitForSeconds(1.0);
                                        $step = 1;
                                        return true;
                                }
                                case 1: {
                                    UnityEngine.Object.Destroy(this.GetComponent(UnityEngine.BoxCollider));

                                }
                                default: {
                                    return false;
                                }
                            }
                        }
                    } catch($async_e1) {
                        $async_e = System.Exception.create($async_e1);
                        throw $async_e;
                    }
                }));
                return $enumerator;
            },
            /*PlayerController.waitdestroyBoxCollider end.*/

            /*PlayerController.ArcherIdle start.*/
            ArcherIdle: function () {
if ( TRACE ) { TRACE( "PlayerController#ArcherIdle", this ); }

                this.isArcherAtk = false;
                this.animator.SetBool$1("isArcher", this.isArcherAtk);
            },
            /*PlayerController.ArcherIdle end.*/


        }
    });
    /*PlayerController end.*/

    /*RobotControll start.*/
    Bridge.define("RobotControll", {
        inherits: [UnityEngine.MonoBehaviour],
        fields: {
            text: null,
            textFire: null,
            teamColor: null,
            gunFire1: null,
            gunFire2: null,
            chasisIdle: null,
            bodyIdle: null,
            chasisRun: null,
            bodyRun: null,
            ChildToControll: null
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "RobotControll#init", this ); }

                this.teamColor = new UnityEngine.Color();
                this.text = "Run";
                this.textFire = "Start Fire";
                this.teamColor = new pc.Color( 1, 0, 0, 1 );
            }
        },
        methods: {
            /*RobotControll.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "RobotControll#Start", this ); }

                this.SetTeamColor(this.transform);
            },
            /*RobotControll.Start end.*/

            /*RobotControll.SetTeamColor start.*/
            SetTeamColor: function (trans) {
if ( TRACE ) { TRACE( "RobotControll#SetTeamColor", this ); }

                //note1
                /* 
                if (trans.renderer != null)
                {
                   trans.renderer.material.SetColor("_DyeColor", teamColor);
                }

                for (int i = 0; i < trans.transform.childCount; i++)
                {

                   if (trans.GetChild(i).renderer != null)
                   {
                       trans.GetChild(i).renderer.material.SetColor("_DyeColor", teamColor);
                   }

                   if (trans.GetChild(i).childCount > 0)
                   {
                       SetTeamColor(trans.GetChild(i));
                   }
                }
                */
            },
            /*RobotControll.SetTeamColor end.*/

            /*RobotControll.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "RobotControll#Awake", this ); }

                //note1
                /* 
                if (chasisIdle)
                	    {
                   animation.Play(chasisIdle.name);
                	    }
                	    else
                	    {
                   animation.Stop();
                	    }

                		if(ChildToControll && ChildToControll.animation)
                		{
                   if (bodyIdle)
                   {
                       ChildToControll.animation.Play(bodyIdle.name);
                   }
                   else
                   {
                       ChildToControll.animation.Stop();
                   }
                		}

                	    if (gunFire1)
                	    {
                   gunFire1.gameObject.SetActive(false);
                	    }

                	    if (gunFire2)
                	    {
                   gunFire2.gameObject.SetActive(false);
                	    }
                */
            },
            /*RobotControll.Awake end.*/

            /*RobotControll.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "RobotControll#Update", this ); }



            },
            /*RobotControll.Update end.*/

            /*RobotControll.PlayFxBundle0 start.*/
            PlayFxBundle0: function () {
if ( TRACE ) { TRACE( "RobotControll#PlayFxBundle0", this ); }


            },
            /*RobotControll.PlayFxBundle0 end.*/

            /*RobotControll.OnGUI start.*/
            OnGUI: function () {
if ( TRACE ) { TRACE( "RobotControll#OnGUI", this ); }

                //note1
                /* 
                GUILayout.BeginArea(new Rect(10, 10, 100, 100));
                		if(GUILayout.Button(text))
                {
                   if (text == "Run")
                			{
                				text = "Idle";

                       if (chasisRun != null)
                       {
                           animation.Play(chasisRun.name);
                       }
                       else
                       {
                           animation.Stop();
                       }
                				
                				if(ChildToControll && ChildToControll.animation)
                				{
                           if (bodyRun != null)
                           {
                               ChildToControll.animation.Play(bodyRun.name);
                           }
                           else
                           {
                               ChildToControll.animation.Stop();
                           }
                					
                				}
                			}
                			else
                			{
                				text = "Run";
                       if (chasisIdle != null)
                       {
                           animation.Play(chasisIdle.name);
                       }
                       else
                       {
                           animation.Stop();
                       }

                				if(ChildToControll && ChildToControll.animation)
                				{
                           if (bodyIdle != null)
                           {
                               ChildToControll.animation.Play(bodyIdle.name);
                           }
                           else
                           {
                               ChildToControll.animation.Stop();
                           }

                				}
                			}
                }


                if (GUILayout.Button(textFire))
                	    {
                   if (textFire == "Start Fire")
                   {
                       textFire = "Stop Fire";

                       gunFire1.gameObject.SetActive(true);
                       gunFire2.gameObject.SetActive(true);
                   }
                   else
                   {
                       textFire = "Start Fire";

                       gunFire1.gameObject.SetActive(false);
                       gunFire2.gameObject.SetActive(false);
                   }
                	    }


                GUILayout.EndArea();
                		
                		
                	
                		//=======================================================================
                		if (GUI.RepeatButton(new Rect(10, 100, ImageWidth, ImageHeight), colorPicker)) {

                       Vector2 pickpos = Event.current.mousePosition;

                       int aaa = Convert.ToInt32(pickpos.x);

                       int bbb = Convert.ToInt32(pickpos.y);

                       Color col = colorPicker.GetPixel(aaa,41-bbb);



                       // "col" is the color value that Unity is returning.

                       // Here you would do something with this color value, like

                       // set a model's material tint value to this color to have it change

                       // colors, etc, etc.

                       //

                       // Right now we are just printing the RGBA color values to the Console

                       Debug.Log(col);

                }
                */
            },
            /*RobotControll.OnGUI end.*/


        }
    });
    /*RobotControll end.*/

    /*SoundManager start.*/
    Bridge.define("SoundManager", {
        inherits: [UnityEngine.MonoBehaviour],
        statics: {
            fields: {
                instance: null
            }
        },
        fields: {
            Click_Audio: null,
            Win_Audio: null,
            Lose_Audio: null,
            MergePlayer_Audio: null,
            Runner_Audio: null,
            Die_Audio: null,
            NearAttack_Audio: null,
            FarAttack_Audio: null,
            GunShoot_Audio: null,
            BuyPlayer_Audio: null,
            MovePlayer_Audio: null
        },
        methods: {
            /*SoundManager.Start start.*/
            Start: function () {
if ( TRACE ) { TRACE( "SoundManager#Start", this ); }

                if (UnityEngine.MonoBehaviour.op_Equality(SoundManager.instance, null)) {
                    SoundManager.instance = this;
                } else {
                    return;
                }

                UnityEngine.Object.DontDestroyOnLoad(this.gameObject);
            },
            /*SoundManager.Start end.*/

            /*SoundManager.ClickAudioBtn start.*/
            ClickAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#ClickAudioBtn", this ); }

                this.Click_Audio.Play();
            },
            /*SoundManager.ClickAudioBtn end.*/

            /*SoundManager.BuyPlayerAudioBtn start.*/
            BuyPlayerAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#BuyPlayerAudioBtn", this ); }

                this.BuyPlayer_Audio.Play();
            },
            /*SoundManager.BuyPlayerAudioBtn end.*/

            /*SoundManager.MovePlayerAudioBtn start.*/
            MovePlayerAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#MovePlayerAudioBtn", this ); }

                this.MovePlayer_Audio.Play();
            },
            /*SoundManager.MovePlayerAudioBtn end.*/

            /*SoundManager.RunnerAudioBtn start.*/
            RunnerAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#RunnerAudioBtn", this ); }

                if (!this.Runner_Audio.isPlaying) {
                    this.Runner_Audio.Play();
                }
            },
            /*SoundManager.RunnerAudioBtn end.*/

            /*SoundManager.GunShootAudioBtn start.*/
            GunShootAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#GunShootAudioBtn", this ); }

                this.GunShoot_Audio.Play();
            },
            /*SoundManager.GunShootAudioBtn end.*/

            /*SoundManager.StopRunnerAudioBtn start.*/
            StopRunnerAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#StopRunnerAudioBtn", this ); }

                if (this.Runner_Audio.isPlaying) {
                    this.Runner_Audio.Stop();
                }
            },
            /*SoundManager.StopRunnerAudioBtn end.*/

            /*SoundManager.DieAudioBtn start.*/
            DieAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#DieAudioBtn", this ); }

                if (!this.Die_Audio.isPlaying) {
                    this.Die_Audio.Play();
                }
            },
            /*SoundManager.DieAudioBtn end.*/

            /*SoundManager.NearAttackAudioBtn start.*/
            NearAttackAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#NearAttackAudioBtn", this ); }

                if (!this.NearAttack_Audio.isPlaying) {
                    this.NearAttack_Audio.Play();
                }
            },
            /*SoundManager.NearAttackAudioBtn end.*/

            /*SoundManager.FarAttackAudioBtn start.*/
            FarAttackAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#FarAttackAudioBtn", this ); }

                if (!this.FarAttack_Audio.isPlaying) {
                    this.FarAttack_Audio.Play();
                }
            },
            /*SoundManager.FarAttackAudioBtn end.*/

            /*SoundManager.MergePlayerAudioBtn start.*/
            MergePlayerAudioBtn: function () {
if ( TRACE ) { TRACE( "SoundManager#MergePlayerAudioBtn", this ); }

                if (!this.MergePlayer_Audio.isPlaying) {
                    this.MergePlayer_Audio.Play();
                }
            },
            /*SoundManager.MergePlayerAudioBtn end.*/

            /*SoundManager.WinGameSound start.*/
            WinGameSound: function () {
if ( TRACE ) { TRACE( "SoundManager#WinGameSound", this ); }

                if (!this.Win_Audio.isPlaying) {
                    this.Win_Audio.Play();
                }
            },
            /*SoundManager.WinGameSound end.*/

            /*SoundManager.LoseGameSound start.*/
            LoseGameSound: function () {
if ( TRACE ) { TRACE( "SoundManager#LoseGameSound", this ); }

                if (!this.Lose_Audio.isPlaying) {
                    this.Lose_Audio.Play();
                }
            },
            /*SoundManager.LoseGameSound end.*/


        }
    });
    /*SoundManager end.*/

    /*Storelink start.*/
    Bridge.define("Storelink", {
        inherits: [UnityEngine.MonoBehaviour],
        methods: {
            /*Storelink.PressLinkGame start.*/
            PressLinkGame: function () {
if ( TRACE ) { TRACE( "Storelink#PressLinkGame", this ); }

                //#if UNITY_ANDROID
                //        Application.OpenURL("market://details?id=com.mori.mergetoy.master");
                //#elif UNITY_IOS
                //            Application.OpenURL("itms-apps://itunes.apple.com/app/id1633811187");
                //#endif
                Luna.Unity.Playable.InstallFullGame();
                Luna.Unity.LifeCycle.GameEnded();
            },
            /*Storelink.PressLinkGame end.*/


        }
    });
    /*Storelink end.*/

    /*TYPE_PLAYER start.*/
    Bridge.define("TYPE_PLAYER", {
        $kind: "enum",
        statics: {
            fields: {
                ATK_NEAR: 0,
                ATK_FAR: 1,
                ATK_PHEP: 2
            }
        }
    });
    /*TYPE_PLAYER end.*/

    /*UnityEngine.UI.Extensions.UIParticleSystem start.*/
    Bridge.define("UnityEngine.UI.Extensions.UIParticleSystem", {
        inherits: [UnityEngine.UI.MaskableGraphic],
        fields: {
            fixedTime: false,
            use3dRotation: false,
            _transform: null,
            pSystem: null,
            particles: null,
            _quad: null,
            imageUV: null,
            textureSheetAnimation: null,
            textureSheetAnimationFrames: 0,
            textureSheetAnimationFrameSize: null,
            pRenderer: null,
            isInitialised: false,
            currentMaterial: null,
            currentTexture: null,
            mainModule: null
        },
        props: {
            mainTexture: {
                get: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#mainTexture#get", this ); }

                    return this.currentTexture;
                }
            }
        },
        ctors: {
            init: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#init", this ); }

                this.imageUV = new UnityEngine.Vector4();
                this.textureSheetAnimationFrameSize = new UnityEngine.Vector2();
                this.fixedTime = true;
                this.use3dRotation = false;
                this._quad = System.Array.init(4, function (){
                    return new UnityEngine.UIVertex();
                }, UnityEngine.UIVertex);
                this.imageUV = pc.Vec4.ZERO.clone();
                this.isInitialised = false;
            }
        },
        methods: {
            /*UnityEngine.UI.Extensions.UIParticleSystem.Initialize start.*/
            Initialize: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#Initialize", this ); }

                // initialize members
                if (UnityEngine.Component.op_Equality(this._transform, null)) {
                    this._transform = this.transform;
                }
                if (UnityEngine.Component.op_Equality(this.pSystem, null)) {
                    this.pSystem = this.GetComponent(UnityEngine.ParticleSystem);

                    if (UnityEngine.Component.op_Equality(this.pSystem, null)) {
                        return false;
                    }

                    this.mainModule = this.pSystem.main;
                    if (this.pSystem.main.maxParticles > 14000) {
                        this.mainModule.maxParticles = 14000;
                    }

                    this.pRenderer = this.pSystem.GetComponent(UnityEngine.ParticleSystemRenderer);
                    if (UnityEngine.Component.op_Inequality(this.pRenderer, null)) {
                        this.pRenderer.enabled = false;
                    }

                    if (this.material == null) {
                        var foundShader = UnityEngine.Shader.Find("UI Extensions/Particles/Additive");
                        if (UnityEngine.Object.op_Implicit(foundShader)) {
                            this.material = new UnityEngine.Material.$ctor2(foundShader);
                        }
                    }

                    this.currentMaterial = this.material;
                    if (UnityEngine.Object.op_Implicit(this.currentMaterial) && this.currentMaterial.HasProperty$1("_MainTex")) {
                        this.currentTexture = this.currentMaterial.mainTexture;
                        if (this.currentTexture == null) {
                            this.currentTexture = UnityEngine.Texture2D.whiteTexture;
                        }
                    }
                    this.material = this.currentMaterial;
                    // automatically set scaling
                    this.mainModule.scalingMode = UnityEngine.ParticleSystemScalingMode.Hierarchy;

                    this.particles = null;
                }
                if (this.particles == null) {
                    this.particles = System.Array.init(this.pSystem.main.maxParticles, function (){
                        return new UnityEngine.ParticleSystem.Particle();
                    }, UnityEngine.ParticleSystem.Particle);
                }

                this.imageUV = new pc.Vec4( 0, 0, 1, 1 );

                // prepare texture sheet animation
                this.textureSheetAnimation = this.pSystem.textureSheetAnimation;
                this.textureSheetAnimationFrames = 0;
                this.textureSheetAnimationFrameSize = pc.Vec2.ZERO.clone();
                if (this.textureSheetAnimation.enabled) {
                    this.textureSheetAnimationFrames = Bridge.Int.mul(this.textureSheetAnimation.numTilesX, this.textureSheetAnimation.numTilesY);
                    this.textureSheetAnimationFrameSize = new pc.Vec2( 1.0 / this.textureSheetAnimation.numTilesX, 1.0 / this.textureSheetAnimation.numTilesY );
                }

                return true;
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.Initialize end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.Awake start.*/
            Awake: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#Awake", this ); }

                UnityEngine.UI.MaskableGraphic.prototype.Awake.call(this);
                if (!this.Initialize()) {
                    this.enabled = false;
                }
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.Awake end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.OnPopulateMesh start.*/
            OnPopulateMesh: function (vh) {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#OnPopulateMesh", this ); }

                var $t, $t1;
                // prepare vertices
                vh.Clear();

                if (!this.gameObject.activeInHierarchy) {
                    return;
                }

                if (!this.isInitialised && !this.pSystem.main.playOnAwake) {
                    this.pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
                    this.isInitialised = true;
                }

                var temp = pc.Vec2.ZERO.clone();
                var corner1 = pc.Vec2.ZERO.clone();
                var corner2 = pc.Vec2.ZERO.clone();
                // iterate through current particles
                var count = this.pSystem.GetParticles(this.particles);

                for (var i = 0; i < count; i = (i + 1) | 0) {
                    var particle = this.particles[i].$clone();

                    // get particle properties
                    var position = UnityEngine.Vector2.FromVector3((this.mainModule.simulationSpace === UnityEngine.ParticleSystemSimulationSpace.Local ? particle.position.$clone() : this._transform.InverseTransformPoint(particle.position)));
                    var rotation = -particle.rotation * UnityEngine.Mathf.Deg2Rad;
                    var rotation90 = rotation + 1.57079637;
                    var color = particle.GetCurrentColor(this.pSystem);
                    var size = particle.GetCurrentSize(this.pSystem) * 0.5;

                    // apply scale
                    if (this.mainModule.scalingMode === UnityEngine.ParticleSystemScalingMode.Shape) {
                        position = position.$clone().scale( 1.0 / ( this.canvas.scaleFactor ) );
                    }

                    // apply texture sheet animation
                    var particleUV = this.imageUV.$clone();
                    if (this.textureSheetAnimation.enabled) {
                        var frameProgress = 1 - (particle.remainingLifetime / particle.startLifetime);

                        if (this.textureSheetAnimation.frameOverTime.curveMin != null) {
                            frameProgress = this.textureSheetAnimation.frameOverTime.curveMin.value(1 - (particle.remainingLifetime / particle.startLifetime));
                        } else if (this.textureSheetAnimation.frameOverTime.curveMax != null) {
                            frameProgress = this.textureSheetAnimation.frameOverTime.curveMax.value(1 - (particle.remainingLifetime / particle.startLifetime));
                        } else if (this.textureSheetAnimation.frameOverTime.constantMax > 0) {
                            frameProgress = this.textureSheetAnimation.frameOverTime.constantMax - (particle.remainingLifetime / particle.startLifetime);
                        }

                        frameProgress = ($t = frameProgress * this.textureSheetAnimation.cycleCount, $t - Math.floor($t / 1) * 1);
                        var frame = 0;

                        switch (this.textureSheetAnimation.animation) {
                            case UnityEngine.ParticleSystemAnimationType.WholeSheet: 
                                frame = Math.floor(frameProgress * this.textureSheetAnimationFrames);
                                break;
                            case UnityEngine.ParticleSystemAnimationType.SingleRow: 
                                frame = Math.floor(frameProgress * this.textureSheetAnimation.numTilesX);
                                var row = this.textureSheetAnimation.rowIndex;
                                //                    if (textureSheetAnimation.useRandomRow) { // FIXME - is this handled internally by rowIndex?
                                //                        row = Random.Range(0, textureSheetAnimation.numTilesY, using: particle.randomSeed);
                                //                    }
                                frame = (frame + (Bridge.Int.mul(row, this.textureSheetAnimation.numTilesX))) | 0;
                                break;
                        }

                        frame = frame % this.textureSheetAnimationFrames;

                        particleUV.x = (frame % this.textureSheetAnimation.numTilesX) * this.textureSheetAnimationFrameSize.x;
                        particleUV.y = 1.0 - Math.floor(((Bridge.Int.div(frame, this.textureSheetAnimation.numTilesX)) | 0)) * this.textureSheetAnimationFrameSize.y;
                        particleUV.z = particleUV.x + this.textureSheetAnimationFrameSize.x;
                        particleUV.w = particleUV.y + this.textureSheetAnimationFrameSize.y;
                    }

                    temp.x = particleUV.x;
                    temp.y = particleUV.y;

                    this._quad[0] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[0].color = color.$clone();
                    this._quad[0].uv0 = temp.$clone();

                    temp.x = particleUV.x;
                    temp.y = particleUV.w;
                    this._quad[1] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[1].color = color.$clone();
                    this._quad[1].uv0 = temp.$clone();

                    temp.x = particleUV.z;
                    temp.y = particleUV.w;
                    this._quad[2] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[2].color = color.$clone();
                    this._quad[2].uv0 = temp.$clone();

                    temp.x = particleUV.z;
                    temp.y = particleUV.y;
                    this._quad[3] = UnityEngine.UIVertex.simpleVert.$clone();
                    this._quad[3].color = color.$clone();
                    this._quad[3].uv0 = temp.$clone();

                    if (rotation === 0) {
                        // no rotation
                        corner1.x = position.x - size;
                        corner1.y = position.y - size;
                        corner2.x = position.x + size;
                        corner2.y = position.y + size;

                        temp.x = corner1.x;
                        temp.y = corner1.y;
                        this._quad[0].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner1.x;
                        temp.y = corner2.y;
                        this._quad[1].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner2.x;
                        temp.y = corner2.y;
                        this._quad[2].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                        temp.x = corner2.x;
                        temp.y = corner1.y;
                        this._quad[3].position = UnityEngine.Vector3.FromVector2(temp.$clone());
                    } else {
                        if (this.use3dRotation) {
                            // get particle properties
                            var pos3d = (this.mainModule.simulationSpace === UnityEngine.ParticleSystemSimulationSpace.Local ? particle.position.$clone() : this._transform.InverseTransformPoint(particle.position));

                            // apply scale
                            if (this.mainModule.scalingMode === UnityEngine.ParticleSystemScalingMode.Shape) {
                                position = position.$clone().scale( 1.0 / ( this.canvas.scaleFactor ) );
                            }

                            var verts = System.Array.init([new pc.Vec3( -size, -size, 0 ), new pc.Vec3( -size, size, 0 ), new pc.Vec3( size, size, 0 ), new pc.Vec3( size, -size, 0 )], UnityEngine.Vector3);

                            var particleRotation = ($t1 = particle.rotation3D, new pc.Quat().setFromEulerAngles_Unity( $t1.x, $t1.y, $t1.z ));

                            this._quad[0].position = pos3d.$clone().add( particleRotation.transformVector( verts[0] ) );
                            this._quad[1].position = pos3d.$clone().add( particleRotation.transformVector( verts[1] ) );
                            this._quad[2].position = pos3d.$clone().add( particleRotation.transformVector( verts[2] ) );
                            this._quad[3].position = pos3d.$clone().add( particleRotation.transformVector( verts[3] ) );
                        } else {
                            // apply rotation
                            var right = new pc.Vec2( Math.cos(rotation), Math.sin(rotation) ).scale( size );
                            var up = new pc.Vec2( Math.cos(rotation90), Math.sin(rotation90) ).scale( size );

                            this._quad[0].position = UnityEngine.Vector3.FromVector2(position.$clone().sub( right ).sub( up ));
                            this._quad[1].position = UnityEngine.Vector3.FromVector2(position.$clone().sub( right ).add( up ));
                            this._quad[2].position = UnityEngine.Vector3.FromVector2(position.$clone().add( right ).add( up ));
                            this._quad[3].position = UnityEngine.Vector3.FromVector2(position.$clone().add( right ).sub( up ));
                        }
                    }

                    vh.AddUIVertexQuad(this._quad);
                }
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.OnPopulateMesh end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.Update start.*/
            Update: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#Update", this ); }

                if (!this.fixedTime && UnityEngine.Application.isPlaying) {
                    this.pSystem.Simulate(UnityEngine.Time.unscaledDeltaTime, false, false, true);
                    this.SetAllDirty();

                    if ((this.currentMaterial != null && !Bridge.referenceEquals(this.currentTexture, this.currentMaterial.mainTexture)) || (this.material != null && this.currentMaterial != null && !Bridge.referenceEquals(this.material.shader, this.currentMaterial.shader))) {
                        this.pSystem = null;
                        this.Initialize();
                    }
                }
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.Update end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.LateUpdate start.*/
            LateUpdate: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#LateUpdate", this ); }

                if (!UnityEngine.Application.isPlaying) {
                    this.SetAllDirty();
                } else {
                    if (this.fixedTime) {
                        this.pSystem.Simulate(UnityEngine.Time.unscaledDeltaTime, false, false, true);
                        this.SetAllDirty();
                        if ((this.currentMaterial != null && !Bridge.referenceEquals(this.currentTexture, this.currentMaterial.mainTexture)) || (this.material != null && this.currentMaterial != null && !Bridge.referenceEquals(this.material.shader, this.currentMaterial.shader))) {
                            this.pSystem = null;
                            this.Initialize();
                        }
                    }
                }
                if (Bridge.referenceEquals(this.material, this.currentMaterial)) {
                    return;
                }
                this.pSystem = null;
                this.Initialize();
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.LateUpdate end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.OnDestroy start.*/
            OnDestroy: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#OnDestroy", this ); }

                this.currentMaterial = null;
                this.currentTexture = null;
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.OnDestroy end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.StartParticleEmission start.*/
            StartParticleEmission: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#StartParticleEmission", this ); }

                this.pSystem.Play();
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.StartParticleEmission end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.StopParticleEmission start.*/
            StopParticleEmission: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#StopParticleEmission", this ); }

                this.pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmittingAndClear);
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.StopParticleEmission end.*/

            /*UnityEngine.UI.Extensions.UIParticleSystem.PauseParticleEmission start.*/
            PauseParticleEmission: function () {
if ( TRACE ) { TRACE( "UnityEngine.UI.Extensions.UIParticleSystem#PauseParticleEmission", this ); }

                this.pSystem.Stop$2(false, UnityEngine.ParticleSystemStopBehavior.StopEmitting);
            },
            /*UnityEngine.UI.Extensions.UIParticleSystem.PauseParticleEmission end.*/


        }
    });
    /*UnityEngine.UI.Extensions.UIParticleSystem end.*/

    var $m = Bridge.setMetadata,
        $n = ["System","UnityEngine","System.Collections","UnityEngine.UI","System.Collections.Generic","TMPro"];

    /*CameraControll start.*/
    $m("CameraControll", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ClampAngle","is":true,"t":8,"pi":[{"n":"angle","pt":$n[0].Single,"ps":0},{"n":"min","pt":$n[0].Single,"ps":1},{"n":"max","pt":$n[0].Single,"ps":2}],"sn":"ClampAngle","rt":$n[0].Single,"p":[$n[0].Single,$n[0].Single,$n[0].Single],"box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"cam","t":4,"rt":$n[1].Transform,"sn":"cam"},{"a":2,"n":"cameraSpeed","t":4,"rt":$n[0].Int32,"sn":"cameraSpeed","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"distance","t":4,"rt":$n[0].Single,"sn":"distance","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"maxDistance","t":4,"rt":$n[0].Int32,"sn":"maxDistance","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"minDistance","t":4,"rt":$n[0].Int32,"sn":"minDistance","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":1,"n":"x","t":4,"rt":$n[0].Single,"sn":"x","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"xSpeed","t":4,"rt":$n[0].Single,"sn":"xSpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"y","t":4,"rt":$n[0].Single,"sn":"y","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"yMaxLimit","t":4,"rt":$n[0].Int32,"sn":"yMaxLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"yMinLimit","t":4,"rt":$n[0].Int32,"sn":"yMinLimit","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"ySpeed","t":4,"rt":$n[0].Single,"sn":"ySpeed","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}}]}; }, $n);
    /*CameraControll end.*/

    /*RobotControll start.*/
    $m("RobotControll", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":1,"n":"OnGUI","t":8,"sn":"OnGUI","rt":$n[0].Void},{"a":1,"n":"PlayFxBundle0","t":8,"sn":"PlayFxBundle0","rt":$n[0].Void},{"a":1,"n":"SetTeamColor","t":8,"pi":[{"n":"trans","pt":$n[1].Transform,"ps":0}],"sn":"SetTeamColor","rt":$n[0].Void,"p":[$n[1].Transform]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"ChildToControll","t":4,"rt":$n[1].GameObject,"sn":"ChildToControll"},{"a":2,"n":"bodyIdle","t":4,"rt":$n[1].AnimationClip,"sn":"bodyIdle"},{"a":2,"n":"bodyRun","t":4,"rt":$n[1].AnimationClip,"sn":"bodyRun"},{"a":2,"n":"chasisIdle","t":4,"rt":$n[1].AnimationClip,"sn":"chasisIdle"},{"a":2,"n":"chasisRun","t":4,"rt":$n[1].AnimationClip,"sn":"chasisRun"},{"a":2,"n":"gunFire1","t":4,"rt":$n[1].Transform,"sn":"gunFire1"},{"a":2,"n":"gunFire2","t":4,"rt":$n[1].Transform,"sn":"gunFire2"},{"a":2,"n":"teamColor","t":4,"rt":$n[1].Color,"sn":"teamColor"},{"a":1,"n":"text","t":4,"rt":$n[0].String,"sn":"text"},{"a":1,"n":"textFire","t":4,"rt":$n[0].String,"sn":"textFire"}]}; }, $n);
    /*RobotControll end.*/

    /*ControlChuong start.*/
    $m("ControlChuong", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"playEffect","t":8,"pi":[{"n":"playerController","pt":PlayerController,"ps":0}],"sn":"playEffect","rt":$n[0].Void,"p":[PlayerController]},{"a":2,"n":"RootPlayer","t":4,"rt":$n[1].GameObject,"sn":"RootPlayer"},{"a":2,"n":"indexLevel","t":4,"rt":$n[0].Int32,"sn":"indexLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isBoxCoin","t":4,"rt":$n[0].Boolean,"sn":"isBoxCoin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTrigger","t":4,"rt":$n[0].Boolean,"sn":"isTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"speedBullet","t":4,"rt":$n[0].Single,"sn":"speedBullet","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"}]}; }, $n);
    /*ControlChuong end.*/

    /*ControlMagic start.*/
    $m("ControlMagic", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"RootPlayer","t":4,"rt":$n[1].GameObject,"sn":"RootPlayer"},{"a":2,"n":"indexLevel","t":4,"rt":$n[0].Int32,"sn":"indexLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isBoxCoin","t":4,"rt":$n[0].Boolean,"sn":"isBoxCoin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTrigger","t":4,"rt":$n[0].Boolean,"sn":"isTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"speedBullet","t":4,"rt":$n[0].Single,"sn":"speedBullet","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"}]}; }, $n);
    /*ControlMagic end.*/

    /*CreateGridPlayer start.*/
    $m("CreateGridPlayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"CheckExistUnlockedPlayerFar","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CheckExistUnlockedPlayerFar","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CheckExistUnlockedPlayerNear","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CheckExistUnlockedPlayerNear","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"CheckExistUnlockedPlayerPhep","t":8,"pi":[{"n":"index","pt":$n[0].Int32,"ps":0}],"sn":"CheckExistUnlockedPlayerPhep","rt":$n[0].Boolean,"p":[$n[0].Int32],"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"CreateBossByIndex","t":8,"pi":[{"n":"indexLevel","pt":$n[0].Int32,"ps":0}],"sn":"CreateBossByIndex","rt":$n[0].Void,"p":[$n[0].Int32]},{"a":1,"n":"CreateGrid","t":8,"sn":"CreateGrid","rt":$n[0].Void},{"a":2,"n":"FormatNumber","t":8,"pi":[{"n":"num","pt":$n[0].Int64,"ps":0}],"sn":"FormatNumber","rt":$n[0].String,"p":[$n[0].Int64]},{"a":2,"n":"GetInfoPlayerFromList","t":8,"pi":[{"n":"column","pt":$n[0].Int32,"ps":0},{"n":"row","pt":$n[0].Int32,"ps":1}],"sn":"GetInfoPlayerFromList","rt":EntityInfoPlayer,"p":[$n[0].Int32,$n[0].Int32]},{"a":2,"n":"PressFight","t":8,"sn":"PressFight","rt":$n[0].Void},{"a":2,"n":"SaveInfoPlayer","t":8,"sn":"SaveInfoPlayer","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"waitShowWinGame","t":8,"sn":"waitShowWinGame","rt":$n[2].IEnumerator},{"a":2,"n":"Confetti_WinGame","t":4,"rt":$n[1].GameObject,"sn":"Confetti_WinGame"},{"a":2,"n":"GameGrid","t":4,"rt":System.Array.type(UnityEngine.GameObject, 2),"sn":"GameGrid"},{"a":2,"n":"Level_Txt","t":4,"rt":$n[3].Text,"sn":"Level_Txt"},{"a":2,"n":"MainPanel","t":4,"rt":$n[1].GameObject,"sn":"MainPanel"},{"a":2,"n":"ObjectGroundGrid","t":4,"rt":$n[1].GameObject,"sn":"ObjectGroundGrid"},{"a":2,"n":"PanelLinkGame","t":4,"rt":$n[1].GameObject,"sn":"PanelLinkGame"},{"a":2,"n":"ParentListPlayer","t":4,"rt":$n[1].Transform,"sn":"ParentListPlayer"},{"a":2,"n":"Tutorial1","t":4,"rt":$n[1].GameObject,"sn":"Tutorial1"},{"a":2,"n":"Tutorial3","t":4,"rt":$n[1].GameObject,"sn":"Tutorial3"},{"a":2,"n":"instance","is":true,"t":4,"rt":CreateGridPlayer,"sn":"instance"},{"a":2,"n":"isLoseGame","t":4,"rt":$n[0].Boolean,"sn":"isLoseGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isStartFight","t":4,"rt":$n[0].Boolean,"sn":"isStartFight","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isWinGame","t":4,"rt":$n[0].Boolean,"sn":"isWinGame","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listAllEnemy","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"listAllEnemy"},{"a":2,"n":"listAllPlayer","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"listAllPlayer"},{"a":2,"n":"listBoss","t":4,"rt":$n[1].GameObject,"sn":"listBoss"},{"a":2,"n":"listCoinBuyPlayer","t":4,"rt":System.Array.type(UnityEngine.UI.Text),"sn":"listCoinBuyPlayer"},{"a":2,"n":"listColor","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"listColor"},{"a":2,"n":"listInfoPlayer","t":4,"rt":$n[4].List$1(EntityInfoPlayer),"sn":"listInfoPlayer"},{"a":2,"n":"listObjectButton","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listObjectButton"},{"a":2,"n":"listPlayerFar","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listPlayerFar"},{"a":2,"n":"listPlayerNear","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listPlayerNear"},{"a":2,"n":"listPlayerPhep","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listPlayerPhep"},{"a":2,"n":"listPosContainerPlayer","t":4,"rt":$n[4].List$1(EntityPosPlayer),"sn":"listPosContainerPlayer"},{"a":2,"n":"listPosShowEnemy","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listPosShowEnemy"},{"a":2,"n":"listUnlockedPlayerFar","t":4,"rt":$n[4].List$1(System.Int32),"sn":"listUnlockedPlayerFar"},{"a":2,"n":"listUnlockedPlayerNear","t":4,"rt":$n[4].List$1(System.Int32),"sn":"listUnlockedPlayerNear"},{"a":2,"n":"listUnlockedPlayerPhep","t":4,"rt":$n[4].List$1(System.Int32),"sn":"listUnlockedPlayerPhep"},{"a":1,"n":"numberColumn","t":4,"rt":$n[0].Int32,"sn":"numberColumn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"numberRow","t":4,"rt":$n[0].Int32,"sn":"numberRow","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*CreateGridPlayer end.*/

    /*EntityInfoPlayer start.*/
    $m("EntityInfoPlayer", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32,TYPE_PLAYER,$n[0].Int32],"pi":[{"n":"indexColumn","pt":$n[0].Int32,"ps":0},{"n":"indexRow","pt":$n[0].Int32,"ps":1},{"n":"typePlayer","pt":TYPE_PLAYER,"ps":2},{"n":"indexLevel","pt":$n[0].Int32,"ps":3}],"sn":"ctor"},{"a":2,"n":"indexColumn","t":4,"rt":$n[0].Int32,"sn":"indexColumn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexLevel","t":4,"rt":$n[0].Int32,"sn":"indexLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexRow","t":4,"rt":$n[0].Int32,"sn":"indexRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"typePlayer","t":4,"rt":TYPE_PLAYER,"sn":"typePlayer","box":function ($v) { return Bridge.box($v, TYPE_PLAYER, System.Enum.toStringFn(TYPE_PLAYER));}}]}; }, $n);
    /*EntityInfoPlayer end.*/

    /*EntityPosPlayer start.*/
    $m("EntityPosPlayer", function () { return {"att":1056769,"a":2,"at":[new System.SerializableAttribute()],"m":[{"a":2,"n":".ctor","t":1,"p":[$n[0].Int32,$n[0].Int32],"pi":[{"n":"indexColumn","pt":$n[0].Int32,"ps":0},{"n":"indexRow","pt":$n[0].Int32,"ps":1}],"sn":"ctor"},{"a":2,"n":"indexColumn","t":4,"rt":$n[0].Int32,"sn":"indexColumn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexRow","t":4,"rt":$n[0].Int32,"sn":"indexRow","box":function ($v) { return Bridge.box($v, System.Int32);}}]}; }, $n);
    /*EntityPosPlayer end.*/

    /*DragPlayer start.*/
    $m("DragPlayer", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"ReturnClickedObject","t":8,"pi":[{"n":"hit","out":true,"pt":$n[1].RaycastHit,"ps":0}],"sn":"ReturnClickedObject","rt":$n[1].GameObject,"p":[$n[1].RaycastHit]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"waitHideEffectMerge","t":8,"pi":[{"n":"playerController","pt":PlayerController,"ps":0}],"sn":"waitHideEffectMerge","rt":$n[2].IEnumerator,"p":[PlayerController]},{"a":1,"n":"waitHideEffectMove","t":8,"pi":[{"n":"playerController","pt":PlayerController,"ps":0}],"sn":"waitHideEffectMove","rt":$n[2].IEnumerator,"p":[PlayerController]},{"a":2,"n":"IndexCurrentGrid","t":4,"rt":$n[0].Int32,"sn":"IndexCurrentGrid","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"MainPanel","t":4,"rt":$n[1].GameObject,"sn":"MainPanel"},{"a":2,"n":"UnlockedPlayerPanel","t":4,"rt":$n[1].GameObject,"sn":"UnlockedPlayerPanel"},{"a":1,"n":"distance","t":4,"rt":$n[1].Vector3,"sn":"distance"},{"a":1,"n":"firstInteractionDone","t":4,"rt":$n[0].Boolean,"sn":"firstInteractionDone","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"instance","is":true,"t":4,"rt":DragPlayer,"sn":"instance"},{"a":2,"n":"isMouseDragging","t":4,"rt":$n[0].Boolean,"sn":"isMouseDragging","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTutorialStep1","t":4,"rt":$n[0].Boolean,"sn":"isTutorialStep1","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTutorialStep2","t":4,"rt":$n[0].Boolean,"sn":"isTutorialStep2","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listSkinPlayer","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"listSkinPlayer"},{"a":2,"n":"playerDel","t":4,"rt":$n[1].GameObject,"sn":"playerDel"},{"a":2,"n":"target","t":4,"rt":$n[1].GameObject,"sn":"target"},{"a":1,"n":"tempPosPlayer","t":4,"rt":$n[1].Vector3,"sn":"tempPosPlayer"},{"a":1,"n":"toDrag","t":4,"rt":$n[1].Vector3,"sn":"toDrag"}]}; }, $n);
    /*DragPlayer end.*/

    /*FixedUI start.*/
    $m("FixedUI", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":1,"n":"UpdateUI","t":8,"sn":"UpdateUI","rt":$n[0].Void},{"a":1,"n":"current_size","t":4,"rt":$n[0].Array.type(System.Int32),"sn":"current_size"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"fight","t":4,"rt":$n[1].RectTransform,"sn":"fight"},{"a":2,"n":"level","t":4,"rt":$n[0].Int32,"sn":"level","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"tuto","t":4,"rt":$n[1].RectTransform,"sn":"tuto"}]}; }, $n);
    /*FixedUI end.*/

    /*GameController start.*/
    $m("GameController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":2,"n":"EndCard","t":8,"sn":"EndCard","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"instance","is":true,"t":4,"rt":GameController,"sn":"instance"},{"a":2,"n":"level","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"level"},{"a":1,"n":"lv1","t":4,"rt":$n[1].GameObject,"sn":"lv1"}]}; }, $n);
    /*GameController end.*/

    /*GroundController start.*/
    $m("GroundController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"isPlayer","t":4,"rt":$n[0].Boolean,"sn":"isPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*GroundController end.*/

    /*ItemGridControl start.*/
    $m("ItemGridControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"HideAllLineItem","t":8,"sn":"HideAllLineItem","rt":$n[0].Void},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":2,"n":"SelectedItem","t":8,"sn":"SelectedItem","rt":$n[0].Void},{"a":2,"n":"UnSelectItem","t":8,"sn":"UnSelectItem","rt":$n[0].Void},{"a":2,"n":"GroundMaterial","t":4,"rt":$n[1].GameObject,"sn":"GroundMaterial"},{"a":2,"n":"Index","t":4,"rt":$n[0].Int32,"sn":"Index","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexColumn","t":4,"rt":$n[0].Int32,"sn":"indexColumn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexRow","t":4,"rt":$n[0].Int32,"sn":"indexRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isContainerPlayer","t":4,"rt":$n[0].Boolean,"sn":"isContainerPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"layerMask","t":4,"rt":$n[1].LayerMask,"sn":"layerMask"},{"a":2,"n":"listGroundMaterial","t":4,"rt":System.Array.type(UnityEngine.Material),"sn":"listGroundMaterial"},{"a":2,"n":"listPlayerGrid","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"listPlayerGrid"},{"a":2,"n":"playerObjectToMerge","t":4,"rt":$n[1].GameObject,"sn":"playerObjectToMerge"}]}; }, $n);
    /*ItemGridControl end.*/

    /*MuiTenControl start.*/
    $m("MuiTenControl", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"RootPlayer","t":4,"rt":$n[1].GameObject,"sn":"RootPlayer"},{"a":2,"n":"indexLevel","t":4,"rt":$n[0].Int32,"sn":"indexLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"isBoxCoin","t":4,"rt":$n[0].Boolean,"sn":"isBoxCoin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isTrigger","t":4,"rt":$n[0].Boolean,"sn":"isTrigger","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listColorTrail","t":4,"rt":System.Array.type(UnityEngine.Color),"sn":"listColorTrail"},{"a":2,"n":"speedBullet","t":4,"rt":$n[0].Single,"sn":"speedBullet","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"target","t":4,"rt":$n[1].Transform,"sn":"target"},{"a":2,"n":"trail","t":4,"rt":$n[1].TrailRenderer,"sn":"trail"}]}; }, $n);
    /*MuiTenControl end.*/

    /*PlayerController start.*/
    $m("PlayerController", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ArcherIdle","t":8,"sn":"ArcherIdle","rt":$n[0].Void},{"a":2,"n":"ArcherShooter","t":8,"sn":"ArcherShooter","rt":$n[0].Void},{"a":1,"n":"GetClosestEnemy","t":8,"pi":[{"n":"enemies","pt":System.Array.type(UnityEngine.GameObject),"ps":0}],"sn":"GetClosestEnemy","rt":$n[1].Transform,"p":[System.Array.type(UnityEngine.GameObject)]},{"a":2,"n":"LoadPlayer","t":8,"sn":"LoadPlayer","rt":$n[0].Void},{"a":1,"n":"OnCollisionExit","t":8,"pi":[{"n":"other","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionExit","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnCollisionStay","t":8,"pi":[{"n":"other","pt":$n[1].Collision,"ps":0}],"sn":"OnCollisionStay","rt":$n[0].Void,"p":[$n[1].Collision]},{"a":1,"n":"OnTriggerEnter","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerEnter","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerExit","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerExit","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"OnTriggerStay","t":8,"pi":[{"n":"other","pt":$n[1].Collider,"ps":0}],"sn":"OnTriggerStay","rt":$n[0].Void,"p":[$n[1].Collider]},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"a":2,"n":"hitChuong","t":8,"sn":"hitChuong","rt":$n[0].Void},{"a":2,"n":"hitDamage","t":8,"sn":"hitDamage","rt":$n[0].Void},{"a":1,"n":"waitdestroyBoxCollider","t":8,"sn":"waitdestroyBoxCollider","rt":$n[2].IEnumerator},{"a":2,"n":"CellSelectedObject","t":4,"rt":$n[1].GameObject,"sn":"CellSelectedObject"},{"a":1,"n":"Collider_RightHand","t":4,"rt":$n[1].Collider,"sn":"Collider_RightHand"},{"a":2,"n":"EffectMerge","t":4,"rt":$n[1].GameObject,"sn":"EffectMerge"},{"a":2,"n":"EffectMove","t":4,"rt":$n[1].GameObject,"sn":"EffectMove"},{"a":2,"n":"HP_Enemy","t":4,"rt":$n[1].GameObject,"sn":"HP_Enemy"},{"a":2,"n":"HP_Player","t":4,"rt":$n[1].GameObject,"sn":"HP_Player"},{"a":2,"n":"MaxHP","t":4,"rt":$n[0].Single,"sn":"MaxHP","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":1,"n":"MaxTimerArcher","t":4,"rt":$n[0].Single,"sn":"MaxTimerArcher","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"MuiTen","t":4,"rt":$n[1].GameObject,"sn":"MuiTen"},{"a":2,"n":"animator","t":4,"rt":$n[1].Animator,"sn":"animator"},{"a":2,"n":"currentHp","t":4,"rt":$n[0].Single,"sn":"currentHp","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"currentWeapon","t":4,"rt":$n[1].GameObject,"sn":"currentWeapon"},{"a":2,"n":"indexColumn","t":4,"rt":$n[0].Int32,"sn":"indexColumn","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexGridCurrent","t":4,"rt":$n[0].Int32,"sn":"indexGridCurrent","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexLevel","t":4,"rt":$n[0].Int32,"sn":"indexLevel","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":2,"n":"indexRow","t":4,"rt":$n[0].Int32,"sn":"indexRow","box":function ($v) { return Bridge.box($v, System.Int32);}},{"a":1,"n":"isArcherAtk","t":4,"rt":$n[0].Boolean,"sn":"isArcherAtk","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isAttackArcherFirst","t":4,"rt":$n[0].Boolean,"sn":"isAttackArcherFirst","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isBoss","t":4,"rt":$n[0].Boolean,"sn":"isBoss","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isBoxCoin","t":4,"rt":$n[0].Boolean,"sn":"isBoxCoin","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isCollisionPlayer","t":4,"rt":$n[0].Boolean,"sn":"isCollisionPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isDie","t":4,"rt":$n[0].Boolean,"sn":"isDie","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isEnemy","t":4,"rt":$n[0].Boolean,"sn":"isEnemy","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isMovedPlayer","t":4,"rt":$n[0].Boolean,"sn":"isMovedPlayer","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isSelected","t":4,"rt":$n[0].Boolean,"sn":"isSelected","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"isTriggerGrid","t":4,"rt":$n[0].Boolean,"sn":"isTriggerGrid","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":2,"n":"listColliderAttackBoss","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"listColliderAttackBoss"},{"a":2,"n":"listDamageFar_PlayerByLevel","t":4,"rt":$n[0].Array.type(System.Single),"sn":"listDamageFar_PlayerByLevel"},{"a":2,"n":"listDamageNear_PlayerByLevel","t":4,"rt":$n[0].Array.type(System.Single),"sn":"listDamageNear_PlayerByLevel"},{"a":2,"n":"listHP_PlayerFarByLevel","t":4,"rt":$n[0].Array.type(System.Single),"sn":"listHP_PlayerFarByLevel"},{"a":2,"n":"listHP_PlayerNearByLevel","t":4,"rt":$n[0].Array.type(System.Single),"sn":"listHP_PlayerNearByLevel"},{"a":2,"n":"listScalePlayerByLevel","t":4,"rt":$n[0].Array.type(System.Single),"sn":"listScalePlayerByLevel"},{"a":2,"n":"nearPlayer","t":4,"rt":$n[1].Transform,"sn":"nearPlayer"},{"a":1,"n":"timerArcher","t":4,"rt":$n[0].Single,"sn":"timerArcher","box":function ($v) { return Bridge.box($v, System.Single, System.Single.format, System.Single.getHashCode);}},{"a":2,"n":"typePlayer","t":4,"rt":TYPE_PLAYER,"sn":"typePlayer","box":function ($v) { return Bridge.box($v, TYPE_PLAYER, System.Enum.toStringFn(TYPE_PLAYER));}}]}; }, $n);
    /*PlayerController end.*/

    /*TYPE_PLAYER start.*/
    $m("TYPE_PLAYER", function () { return {"att":257,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"ATK_FAR","is":true,"t":4,"rt":TYPE_PLAYER,"sn":"ATK_FAR","box":function ($v) { return Bridge.box($v, TYPE_PLAYER, System.Enum.toStringFn(TYPE_PLAYER));}},{"a":2,"n":"ATK_NEAR","is":true,"t":4,"rt":TYPE_PLAYER,"sn":"ATK_NEAR","box":function ($v) { return Bridge.box($v, TYPE_PLAYER, System.Enum.toStringFn(TYPE_PLAYER));}},{"a":2,"n":"ATK_PHEP","is":true,"t":4,"rt":TYPE_PLAYER,"sn":"ATK_PHEP","box":function ($v) { return Bridge.box($v, TYPE_PLAYER, System.Enum.toStringFn(TYPE_PLAYER));}}]}; }, $n);
    /*TYPE_PLAYER end.*/

    /*SoundManager start.*/
    $m("SoundManager", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"BuyPlayerAudioBtn","t":8,"sn":"BuyPlayerAudioBtn","rt":$n[0].Void},{"a":2,"n":"ClickAudioBtn","t":8,"sn":"ClickAudioBtn","rt":$n[0].Void},{"a":2,"n":"DieAudioBtn","t":8,"sn":"DieAudioBtn","rt":$n[0].Void},{"a":2,"n":"FarAttackAudioBtn","t":8,"sn":"FarAttackAudioBtn","rt":$n[0].Void},{"a":2,"n":"GunShootAudioBtn","t":8,"sn":"GunShootAudioBtn","rt":$n[0].Void},{"a":2,"n":"LoseGameSound","t":8,"sn":"LoseGameSound","rt":$n[0].Void},{"a":2,"n":"MergePlayerAudioBtn","t":8,"sn":"MergePlayerAudioBtn","rt":$n[0].Void},{"a":2,"n":"MovePlayerAudioBtn","t":8,"sn":"MovePlayerAudioBtn","rt":$n[0].Void},{"a":2,"n":"NearAttackAudioBtn","t":8,"sn":"NearAttackAudioBtn","rt":$n[0].Void},{"a":2,"n":"RunnerAudioBtn","t":8,"sn":"RunnerAudioBtn","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":2,"n":"StopRunnerAudioBtn","t":8,"sn":"StopRunnerAudioBtn","rt":$n[0].Void},{"a":2,"n":"WinGameSound","t":8,"sn":"WinGameSound","rt":$n[0].Void},{"a":2,"n":"BuyPlayer_Audio","t":4,"rt":$n[1].AudioSource,"sn":"BuyPlayer_Audio"},{"a":2,"n":"Click_Audio","t":4,"rt":$n[1].AudioSource,"sn":"Click_Audio"},{"a":2,"n":"Die_Audio","t":4,"rt":$n[1].AudioSource,"sn":"Die_Audio"},{"a":2,"n":"FarAttack_Audio","t":4,"rt":$n[1].AudioSource,"sn":"FarAttack_Audio"},{"a":2,"n":"GunShoot_Audio","t":4,"rt":$n[1].AudioSource,"sn":"GunShoot_Audio"},{"a":2,"n":"Lose_Audio","t":4,"rt":$n[1].AudioSource,"sn":"Lose_Audio"},{"a":2,"n":"MergePlayer_Audio","t":4,"rt":$n[1].AudioSource,"sn":"MergePlayer_Audio"},{"a":2,"n":"MovePlayer_Audio","t":4,"rt":$n[1].AudioSource,"sn":"MovePlayer_Audio"},{"a":2,"n":"NearAttack_Audio","t":4,"rt":$n[1].AudioSource,"sn":"NearAttack_Audio"},{"a":2,"n":"Runner_Audio","t":4,"rt":$n[1].AudioSource,"sn":"Runner_Audio"},{"a":2,"n":"Win_Audio","t":4,"rt":$n[1].AudioSource,"sn":"Win_Audio"},{"a":2,"n":"instance","is":true,"t":4,"rt":SoundManager,"sn":"instance"}]}; }, $n);
    /*SoundManager end.*/

    /*Storelink start.*/
    $m("Storelink", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"PressLinkGame","t":8,"sn":"PressLinkGame","rt":$n[0].Void}]}; }, $n);
    /*Storelink end.*/

    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty start.*/
    $m("IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"}]}; }, $n);
    /*IAmAnEmptyScriptJustToMakeCodelessProjectsCompileProperty end.*/

    /*LayerLab.PanelControlSimpleCasual start.*/
    $m("LayerLab.PanelControlSimpleCasual", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":1,"n":"CheckControl","t":8,"sn":"CheckControl","rt":$n[0].Void},{"a":2,"n":"Click_Mode","t":8,"sn":"Click_Mode","rt":$n[0].Void},{"a":2,"n":"Click_Next","t":8,"sn":"Click_Next","rt":$n[0].Void},{"a":2,"n":"Click_Prev","t":8,"sn":"Click_Prev","rt":$n[0].Void},{"a":1,"n":"SetArrowActive","t":8,"sn":"SetArrowActive","rt":$n[0].Void},{"a":1,"n":"SetMode","t":8,"sn":"SetMode","rt":$n[0].Void},{"a":1,"n":"Start","t":8,"sn":"Start","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonNext","t":4,"rt":$n[3].Button,"sn":"buttonNext"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"buttonPrev","t":4,"rt":$n[3].Button,"sn":"buttonPrev"},{"a":1,"n":"isDarakMode","t":4,"rt":$n[0].Boolean,"sn":"isDarakMode","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"isReady","t":4,"rt":$n[0].Boolean,"sn":"isReady","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"page","t":4,"rt":$n[0].Int32,"sn":"page","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelDark","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"panelDark"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelLight","t":4,"rt":$n[4].List$1(UnityEngine.GameObject),"sn":"panelLight"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelTransformDark","t":4,"rt":$n[1].Transform,"sn":"panelTransformDark"},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"panelTransformLight","t":4,"rt":$n[1].Transform,"sn":"panelTransformLight"},{"a":1,"n":"textTitle","t":4,"rt":$n[5].TextMeshProUGUI,"sn":"textTitle"}]}; }, $n);
    /*LayerLab.PanelControlSimpleCasual end.*/

    /*LayerLab.PanelSimpleCasual start.*/
    $m("LayerLab.PanelSimpleCasual", function () { return {"att":1048577,"a":2,"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"a":2,"n":"OnDisable","t":8,"sn":"OnDisable","rt":$n[0].Void},{"a":2,"n":"OnEnable","t":8,"sn":"OnEnable","rt":$n[0].Void},{"at":[new UnityEngine.SerializeFieldAttribute()],"a":1,"n":"otherPanels","t":4,"rt":System.Array.type(UnityEngine.GameObject),"sn":"otherPanels"}]}; }, $n);
    /*LayerLab.PanelSimpleCasual end.*/

    /*UnityEngine.UI.Extensions.UIParticleSystem start.*/
    $m("UnityEngine.UI.Extensions.UIParticleSystem", function () { return {"att":1048577,"a":2,"at":[new UnityEngine.ExecuteInEditModeAttribute(),new UnityEngine.RequireComponent.$ctor1(UnityEngine.CanvasRenderer, UnityEngine.ParticleSystem),new UnityEngine.AddComponentMenu.ctor("UI/Effects/Extensions/UIParticleSystem")],"m":[{"a":2,"isSynthetic":true,"n":".ctor","t":1,"sn":"ctor"},{"ov":true,"a":3,"n":"Awake","t":8,"sn":"Awake","rt":$n[0].Void},{"a":3,"n":"Initialize","t":8,"sn":"Initialize","rt":$n[0].Boolean,"box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"LateUpdate","t":8,"sn":"LateUpdate","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnDestroy","t":8,"sn":"OnDestroy","rt":$n[0].Void},{"ov":true,"a":3,"n":"OnPopulateMesh","t":8,"pi":[{"n":"vh","pt":$n[3].VertexHelper,"ps":0}],"sn":"OnPopulateMesh","rt":$n[0].Void,"p":[$n[3].VertexHelper]},{"a":2,"n":"PauseParticleEmission","t":8,"sn":"PauseParticleEmission","rt":$n[0].Void},{"a":2,"n":"StartParticleEmission","t":8,"sn":"StartParticleEmission","rt":$n[0].Void},{"a":2,"n":"StopParticleEmission","t":8,"sn":"StopParticleEmission","rt":$n[0].Void},{"a":1,"n":"Update","t":8,"sn":"Update","rt":$n[0].Void},{"ov":true,"a":2,"n":"mainTexture","t":16,"rt":$n[1].Texture,"g":{"ov":true,"a":2,"n":"get_mainTexture","t":8,"rt":$n[1].Texture,"fg":"mainTexture"},"fn":"mainTexture"},{"a":1,"n":"_quad","t":4,"rt":System.Array.type(UnityEngine.UIVertex),"sn":"_quad"},{"a":1,"n":"_transform","t":4,"rt":$n[1].Transform,"sn":"_transform"},{"a":1,"n":"currentMaterial","t":4,"rt":$n[1].Material,"sn":"currentMaterial"},{"a":1,"n":"currentTexture","t":4,"rt":$n[1].Texture,"sn":"currentTexture"},{"at":[new UnityEngine.TooltipAttribute("Having this enabled run the system in LateUpdate rather than in Update making it faster but less precise (more clunky)")],"a":2,"n":"fixedTime","t":4,"rt":$n[0].Boolean,"sn":"fixedTime","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"imageUV","t":4,"rt":$n[1].Vector4,"sn":"imageUV"},{"a":1,"n":"isInitialised","t":4,"rt":$n[0].Boolean,"sn":"isInitialised","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}},{"a":1,"n":"mainModule","t":4,"rt":pc.ParticleSystemMain,"sn":"mainModule"},{"a":1,"n":"pRenderer","t":4,"rt":$n[1].ParticleSystemRenderer,"sn":"pRenderer"},{"a":1,"n":"pSystem","t":4,"rt":$n[1].ParticleSystem,"sn":"pSystem"},{"a":1,"n":"particles","t":4,"rt":System.Array.type(UnityEngine.ParticleSystem.Particle),"sn":"particles"},{"a":1,"n":"textureSheetAnimation","t":4,"rt":pc.ParticleSystemTextureSheetAnimation,"sn":"textureSheetAnimation"},{"a":1,"n":"textureSheetAnimationFrameSize","t":4,"rt":$n[1].Vector2,"sn":"textureSheetAnimationFrameSize"},{"a":1,"n":"textureSheetAnimationFrames","t":4,"rt":$n[0].Int32,"sn":"textureSheetAnimationFrames","box":function ($v) { return Bridge.box($v, System.Int32);}},{"at":[new UnityEngine.TooltipAttribute("Enables 3d rotation for the particles")],"a":2,"n":"use3dRotation","t":4,"rt":$n[0].Boolean,"sn":"use3dRotation","box":function ($v) { return Bridge.box($v, System.Boolean, System.Boolean.toString);}}]}; }, $n);
    /*UnityEngine.UI.Extensions.UIParticleSystem end.*/

});
