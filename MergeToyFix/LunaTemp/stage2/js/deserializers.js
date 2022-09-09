var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i532 = root || request.c( 'UnityEngine.JointSpring' )
  var i533 = data
  i532.spring = i533[0]
  i532.damper = i533[1]
  i532.targetPosition = i533[2]
  return i532
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i534 = root || request.c( 'UnityEngine.JointMotor' )
  var i535 = data
  i534.m_TargetVelocity = i535[0]
  i534.m_Force = i535[1]
  i534.m_FreeSpin = i535[2]
  return i534
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i536 = root || request.c( 'UnityEngine.JointLimits' )
  var i537 = data
  i536.m_Min = i537[0]
  i536.m_Max = i537[1]
  i536.m_Bounciness = i537[2]
  i536.m_BounceMinVelocity = i537[3]
  i536.m_ContactDistance = i537[4]
  i536.minBounce = i537[5]
  i536.maxBounce = i537[6]
  return i536
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i538 = root || request.c( 'UnityEngine.JointDrive' )
  var i539 = data
  i538.m_PositionSpring = i539[0]
  i538.m_PositionDamper = i539[1]
  i538.m_MaximumForce = i539[2]
  return i538
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i540 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i541 = data
  i540.m_Spring = i541[0]
  i540.m_Damper = i541[1]
  return i540
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i542 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i543 = data
  i542.m_Limit = i543[0]
  i542.m_Bounciness = i543[1]
  i542.m_ContactDistance = i543[2]
  return i542
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i544 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i545 = data
  i544.m_ExtremumSlip = i545[0]
  i544.m_ExtremumValue = i545[1]
  i544.m_AsymptoteSlip = i545[2]
  i544.m_AsymptoteValue = i545[3]
  i544.m_Stiffness = i545[4]
  return i544
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i546 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i547 = data
  i546.m_LowerAngle = i547[0]
  i546.m_UpperAngle = i547[1]
  return i546
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i548 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i549 = data
  i548.m_MotorSpeed = i549[0]
  i548.m_MaximumMotorTorque = i549[1]
  return i548
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i550 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i551 = data
  i550.m_DampingRatio = i551[0]
  i550.m_Frequency = i551[1]
  i550.m_Angle = i551[2]
  return i550
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i552 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i553 = data
  i552.m_LowerTranslation = i553[0]
  i552.m_UpperTranslation = i553[1]
  return i552
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i554 = root || new pc.UnityMaterial()
  var i555 = data
  i554.name = i555[0]
  request.r(i555[1], i555[2], 0, i554, 'shader')
  i554.renderQueue = i555[3]
  i554.enableInstancing = !!i555[4]
  var i557 = i555[5]
  var i556 = []
  for(var i = 0; i < i557.length; i += 1) {
    i556.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i557[i + 0]) );
  }
  i554.floatParameters = i556
  var i559 = i555[6]
  var i558 = []
  for(var i = 0; i < i559.length; i += 1) {
    i558.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i559[i + 0]) );
  }
  i554.colorParameters = i558
  var i561 = i555[7]
  var i560 = []
  for(var i = 0; i < i561.length; i += 1) {
    i560.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i561[i + 0]) );
  }
  i554.vectorParameters = i560
  var i563 = i555[8]
  var i562 = []
  for(var i = 0; i < i563.length; i += 1) {
    i562.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i563[i + 0]) );
  }
  i554.textureParameters = i562
  var i565 = i555[9]
  var i564 = []
  for(var i = 0; i < i565.length; i += 1) {
    i564.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i565[i + 0]) );
  }
  i554.materialFlags = i564
  return i554
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i568 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i569 = data
  i568.name = i569[0]
  i568.value = i569[1]
  return i568
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i572 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i573 = data
  i572.name = i573[0]
  i572.value = new pc.Color(i573[1], i573[2], i573[3], i573[4])
  return i572
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i576 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i577 = data
  i576.name = i577[0]
  i576.value = new pc.Vec4( i577[1], i577[2], i577[3], i577[4] )
  return i576
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i580 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i581 = data
  i580.name = i581[0]
  request.r(i581[1], i581[2], 0, i580, 'value')
  return i580
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i584 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i585 = data
  i584.name = i585[0]
  i584.enabled = !!i585[1]
  return i584
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i586 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i587 = data
  i586.position = new pc.Vec3( i587[0], i587[1], i587[2] )
  i586.scale = new pc.Vec3( i587[3], i587[4], i587[5] )
  i586.rotation = new pc.Quat(i587[6], i587[7], i587[8], i587[9])
  return i586
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i588 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i589 = data
  i588.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i589[0], i588.main)
  i588.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i589[1], i588.colorBySpeed)
  i588.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i589[2], i588.colorOverLifetime)
  i588.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i589[3], i588.emission)
  i588.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i589[4], i588.rotationBySpeed)
  i588.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i589[5], i588.rotationOverLifetime)
  i588.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i589[6], i588.shape)
  i588.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i589[7], i588.sizeBySpeed)
  i588.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i589[8], i588.sizeOverLifetime)
  i588.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i589[9], i588.textureSheetAnimation)
  i588.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i589[10], i588.velocityOverLifetime)
  i588.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i589[11], i588.noise)
  i588.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i589[12], i588.inheritVelocity)
  i588.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i589[13], i588.forceOverLifetime)
  i588.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i589[14], i588.limitVelocityOverLifetime)
  i588.useAutoRandomSeed = !!i589[15]
  i588.randomSeed = i589[16]
  return i588
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i590 = root || new pc.ParticleSystemMain()
  var i591 = data
  i590.duration = i591[0]
  i590.loop = !!i591[1]
  i590.prewarm = !!i591[2]
  i590.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[3], i590.startDelay)
  i590.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[4], i590.startLifetime)
  i590.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[5], i590.startSpeed)
  i590.startSize3D = !!i591[6]
  i590.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[7], i590.startSizeX)
  i590.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[8], i590.startSizeY)
  i590.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[9], i590.startSizeZ)
  i590.startRotation3D = !!i591[10]
  i590.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[11], i590.startRotationX)
  i590.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[12], i590.startRotationY)
  i590.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[13], i590.startRotationZ)
  i590.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i591[14], i590.startColor)
  i590.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i591[15], i590.gravityModifier)
  i590.simulationSpace = i591[16]
  request.r(i591[17], i591[18], 0, i590, 'customSimulationSpace')
  i590.simulationSpeed = i591[19]
  i590.useUnscaledTime = !!i591[20]
  i590.scalingMode = i591[21]
  i590.playOnAwake = !!i591[22]
  i590.maxParticles = i591[23]
  i590.emitterVelocityMode = i591[24]
  i590.stopAction = i591[25]
  return i590
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i592 = root || new pc.MinMaxCurve()
  var i593 = data
  i592.mode = i593[0]
  i592.curveMin = new pc.AnimationCurve( { keys_flow: i593[1] } )
  i592.curveMax = new pc.AnimationCurve( { keys_flow: i593[2] } )
  i592.curveMultiplier = i593[3]
  i592.constantMin = i593[4]
  i592.constantMax = i593[5]
  return i592
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i594 = root || new pc.MinMaxGradient()
  var i595 = data
  i594.mode = i595[0]
  i594.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i595[1], i594.gradientMin)
  i594.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i595[2], i594.gradientMax)
  i594.colorMin = new pc.Color(i595[3], i595[4], i595[5], i595[6])
  i594.colorMax = new pc.Color(i595[7], i595[8], i595[9], i595[10])
  return i594
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i596 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i597 = data
  i596.mode = i597[0]
  var i599 = i597[1]
  var i598 = []
  for(var i = 0; i < i599.length; i += 1) {
    i598.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i599[i + 0]) );
  }
  i596.colorKeys = i598
  var i601 = i597[2]
  var i600 = []
  for(var i = 0; i < i601.length; i += 1) {
    i600.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i601[i + 0]) );
  }
  i596.alphaKeys = i600
  return i596
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i604 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i605 = data
  i604.color = new pc.Color(i605[0], i605[1], i605[2], i605[3])
  i604.time = i605[4]
  return i604
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i608 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i609 = data
  i608.alpha = i609[0]
  i608.time = i609[1]
  return i608
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i610 = root || new pc.ParticleSystemColorBySpeed()
  var i611 = data
  i610.enabled = !!i611[0]
  i610.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i611[1], i610.color)
  i610.range = new pc.Vec2( i611[2], i611[3] )
  return i610
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i612 = root || new pc.ParticleSystemColorOverLifetime()
  var i613 = data
  i612.enabled = !!i613[0]
  i612.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i613[1], i612.color)
  return i612
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i614 = root || new pc.ParticleSystemEmitter()
  var i615 = data
  i614.enabled = !!i615[0]
  i614.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[1], i614.rateOverTime)
  i614.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i615[2], i614.rateOverDistance)
  var i617 = i615[3]
  var i616 = []
  for(var i = 0; i < i617.length; i += 1) {
    i616.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i617[i + 0]) );
  }
  i614.bursts = i616
  return i614
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i620 = root || new pc.ParticleSystemBurst()
  var i621 = data
  i620.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i621[0], i620.count)
  i620.cycleCount = i621[1]
  i620.minCount = i621[2]
  i620.maxCount = i621[3]
  i620.repeatInterval = i621[4]
  i620.time = i621[5]
  return i620
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i622 = root || new pc.ParticleSystemRotationBySpeed()
  var i623 = data
  i622.enabled = !!i623[0]
  i622.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[1], i622.x)
  i622.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[2], i622.y)
  i622.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i623[3], i622.z)
  i622.separateAxes = !!i623[4]
  i622.range = new pc.Vec2( i623[5], i623[6] )
  return i622
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i624 = root || new pc.ParticleSystemRotationOverLifetime()
  var i625 = data
  i624.enabled = !!i625[0]
  i624.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[1], i624.x)
  i624.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[2], i624.y)
  i624.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i625[3], i624.z)
  i624.separateAxes = !!i625[4]
  return i624
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i626 = root || new pc.ParticleSystemShape()
  var i627 = data
  i626.enabled = !!i627[0]
  i626.shapeType = i627[1]
  i626.randomDirectionAmount = i627[2]
  i626.sphericalDirectionAmount = i627[3]
  i626.randomPositionAmount = i627[4]
  i626.alignToDirection = !!i627[5]
  i626.radius = i627[6]
  i626.radiusMode = i627[7]
  i626.radiusSpread = i627[8]
  i626.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[9], i626.radiusSpeed)
  i626.radiusThickness = i627[10]
  i626.angle = i627[11]
  i626.length = i627[12]
  i626.boxThickness = new pc.Vec3( i627[13], i627[14], i627[15] )
  i626.meshShapeType = i627[16]
  request.r(i627[17], i627[18], 0, i626, 'mesh')
  request.r(i627[19], i627[20], 0, i626, 'meshRenderer')
  request.r(i627[21], i627[22], 0, i626, 'skinnedMeshRenderer')
  i626.useMeshMaterialIndex = !!i627[23]
  i626.meshMaterialIndex = i627[24]
  i626.useMeshColors = !!i627[25]
  i626.normalOffset = i627[26]
  i626.arc = i627[27]
  i626.arcMode = i627[28]
  i626.arcSpread = i627[29]
  i626.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i627[30], i626.arcSpeed)
  i626.donutRadius = i627[31]
  i626.position = new pc.Vec3( i627[32], i627[33], i627[34] )
  i626.rotation = new pc.Vec3( i627[35], i627[36], i627[37] )
  i626.scale = new pc.Vec3( i627[38], i627[39], i627[40] )
  return i626
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i628 = root || new pc.ParticleSystemSizeBySpeed()
  var i629 = data
  i628.enabled = !!i629[0]
  i628.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[1], i628.x)
  i628.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[2], i628.y)
  i628.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i629[3], i628.z)
  i628.separateAxes = !!i629[4]
  i628.range = new pc.Vec2( i629[5], i629[6] )
  return i628
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i630 = root || new pc.ParticleSystemSizeOverLifetime()
  var i631 = data
  i630.enabled = !!i631[0]
  i630.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[1], i630.x)
  i630.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[2], i630.y)
  i630.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i631[3], i630.z)
  i630.separateAxes = !!i631[4]
  return i630
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i632 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i633 = data
  i632.enabled = !!i633[0]
  i632.mode = i633[1]
  i632.animation = i633[2]
  i632.numTilesX = i633[3]
  i632.numTilesY = i633[4]
  i632.useRandomRow = !!i633[5]
  i632.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[6], i632.frameOverTime)
  i632.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i633[7], i632.startFrame)
  i632.cycleCount = i633[8]
  i632.rowIndex = i633[9]
  i632.flipU = i633[10]
  i632.flipV = i633[11]
  i632.spriteCount = i633[12]
  var i635 = i633[13]
  var i634 = []
  for(var i = 0; i < i635.length; i += 2) {
  request.r(i635[i + 0], i635[i + 1], 2, i634, '')
  }
  i632.sprites = i634
  return i632
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i638 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i639 = data
  i638.enabled = !!i639[0]
  i638.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[1], i638.x)
  i638.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[2], i638.y)
  i638.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[3], i638.z)
  i638.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i639[4], i638.speedModifier)
  i638.space = i639[5]
  return i638
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i640 = root || new pc.ParticleSystemNoise()
  var i641 = data
  i640.enabled = !!i641[0]
  i640.separateAxes = !!i641[1]
  i640.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[2], i640.strengthX)
  i640.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[3], i640.strengthY)
  i640.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[4], i640.strengthZ)
  i640.frequency = i641[5]
  i640.damping = !!i641[6]
  i640.octaveCount = i641[7]
  i640.octaveMultiplier = i641[8]
  i640.octaveScale = i641[9]
  i640.quality = i641[10]
  i640.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[11], i640.scrollSpeed)
  i640.scrollSpeedMultiplier = i641[12]
  i640.remapEnabled = !!i641[13]
  i640.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[14], i640.remapX)
  i640.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[15], i640.remapY)
  i640.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[16], i640.remapZ)
  i640.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[17], i640.positionAmount)
  i640.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[18], i640.rotationAmount)
  i640.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i641[19], i640.sizeAmount)
  return i640
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i642 = root || new pc.ParticleSystemInheritVelocity()
  var i643 = data
  i642.enabled = !!i643[0]
  i642.mode = i643[1]
  i642.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i643[2], i642.curve)
  return i642
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i644 = root || new pc.ParticleSystemForceOverLifetime()
  var i645 = data
  i644.enabled = !!i645[0]
  i644.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[1], i644.x)
  i644.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[2], i644.y)
  i644.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i645[3], i644.z)
  i644.space = i645[4]
  i644.randomized = !!i645[5]
  return i644
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i646 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i647 = data
  i646.enabled = !!i647[0]
  i646.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[1], i646.limitX)
  i646.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[2], i646.limitY)
  i646.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[3], i646.limitZ)
  i646.dampen = i647[4]
  i646.separateAxes = !!i647[5]
  i646.space = i647[6]
  i646.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i647[7], i646.drag)
  i646.multiplyDragByParticleSize = !!i647[8]
  i646.multiplyDragByParticleVelocity = !!i647[9]
  return i646
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i648 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i649 = data
  i648.enabled = !!i649[0]
  request.r(i649[1], i649[2], 0, i648, 'sharedMaterial')
  var i651 = i649[3]
  var i650 = []
  for(var i = 0; i < i651.length; i += 2) {
  request.r(i651[i + 0], i651[i + 1], 2, i650, '')
  }
  i648.sharedMaterials = i650
  i648.receiveShadows = !!i649[4]
  i648.shadowCastingMode = i649[5]
  i648.sortingLayerID = i649[6]
  i648.sortingOrder = i649[7]
  i648.lightmapIndex = i649[8]
  i648.lightmapSceneIndex = i649[9]
  i648.lightmapScaleOffset = new pc.Vec4( i649[10], i649[11], i649[12], i649[13] )
  i648.lightProbeUsage = i649[14]
  i648.reflectionProbeUsage = i649[15]
  request.r(i649[16], i649[17], 0, i648, 'mesh')
  i648.meshCount = i649[18]
  i648.activeVertexStreamsCount = i649[19]
  i648.alignment = i649[20]
  i648.renderMode = i649[21]
  i648.sortMode = i649[22]
  i648.lengthScale = i649[23]
  i648.velocityScale = i649[24]
  i648.cameraVelocityScale = i649[25]
  i648.normalDirection = i649[26]
  i648.sortingFudge = i649[27]
  i648.minParticleSize = i649[28]
  i648.maxParticleSize = i649[29]
  i648.pivot = new pc.Vec3( i649[30], i649[31], i649[32] )
  request.r(i649[33], i649[34], 0, i648, 'trailMaterial')
  return i648
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i654 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i655 = data
  i654.name = i655[0]
  i654.tag = i655[1]
  i654.enabled = !!i655[2]
  i654.isStatic = !!i655[3]
  i654.layer = i655[4]
  return i654
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i656 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i657 = data
  request.r(i657[0], i657[1], 0, i656, 'sharedMesh')
  return i656
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i658 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i659 = data
  request.r(i659[0], i659[1], 0, i658, 'additionalVertexStreams')
  i658.enabled = !!i659[2]
  request.r(i659[3], i659[4], 0, i658, 'sharedMaterial')
  var i661 = i659[5]
  var i660 = []
  for(var i = 0; i < i661.length; i += 2) {
  request.r(i661[i + 0], i661[i + 1], 2, i660, '')
  }
  i658.sharedMaterials = i660
  i658.receiveShadows = !!i659[6]
  i658.shadowCastingMode = i659[7]
  i658.sortingLayerID = i659[8]
  i658.sortingOrder = i659[9]
  i658.lightmapIndex = i659[10]
  i658.lightmapSceneIndex = i659[11]
  i658.lightmapScaleOffset = new pc.Vec4( i659[12], i659[13], i659[14], i659[15] )
  i658.lightProbeUsage = i659[16]
  i658.reflectionProbeUsage = i659[17]
  return i658
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i662 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i663 = data
  i662.center = new pc.Vec3( i663[0], i663[1], i663[2] )
  i662.size = new pc.Vec3( i663[3], i663[4], i663[5] )
  i662.enabled = !!i663[6]
  i662.isTrigger = !!i663[7]
  request.r(i663[8], i663[9], 0, i662, 'material')
  return i662
}

Deserializers["CreateGridPlayer"] = function (request, data, root) {
  var i664 = root || request.c( 'CreateGridPlayer' )
  var i665 = data
  request.r(i665[0], i665[1], 0, i664, 'ObjectGroundGrid')
  var i667 = i665[2]
  var i666 = new (System.Collections.Generic.List$1(Bridge.ns('EntityPosPlayer')))
  for(var i = 0; i < i667.length; i += 1) {
    i666.add(request.d('EntityPosPlayer', i667[i + 0]));
  }
  i664.listPosContainerPlayer = i666
  var i669 = i665[3]
  var i668 = new (System.Collections.Generic.List$1(Bridge.ns('EntityInfoPlayer')))
  for(var i = 0; i < i669.length; i += 1) {
    i668.add(request.d('EntityInfoPlayer', i669[i + 0]));
  }
  i664.listInfoPlayer = i668
  var i671 = i665[4]
  var i670 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i671.length; i += 1) {
    i670.add(i671[i + 0]);
  }
  i664.listUnlockedPlayerNear = i670
  var i673 = i665[5]
  var i672 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i673.length; i += 1) {
    i672.add(i673[i + 0]);
  }
  i664.listUnlockedPlayerFar = i672
  var i675 = i665[6]
  var i674 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i675.length; i += 1) {
    i674.add(i675[i + 0]);
  }
  i664.listUnlockedPlayerPhep = i674
  var i677 = i665[7]
  var i676 = []
  for(var i = 0; i < i677.length; i += 2) {
  request.r(i677[i + 0], i677[i + 1], 2, i676, '')
  }
  i664.listPosShowEnemy = i676
  request.r(i665[8], i665[9], 0, i664, 'ParentListPlayer')
  var i679 = i665[10]
  var i678 = []
  for(var i = 0; i < i679.length; i += 2) {
  request.r(i679[i + 0], i679[i + 1], 2, i678, '')
  }
  i664.listPlayerNear = i678
  var i681 = i665[11]
  var i680 = []
  for(var i = 0; i < i681.length; i += 2) {
  request.r(i681[i + 0], i681[i + 1], 2, i680, '')
  }
  i664.listPlayerFar = i680
  var i683 = i665[12]
  var i682 = []
  for(var i = 0; i < i683.length; i += 2) {
  request.r(i683[i + 0], i683[i + 1], 2, i682, '')
  }
  i664.listPlayerPhep = i682
  i664.isStartFight = !!i665[13]
  var i685 = i665[14]
  var i684 = []
  for(var i = 0; i < i685.length; i += 2) {
  request.r(i685[i + 0], i685[i + 1], 2, i684, '')
  }
  i664.listObjectButton = i684
  var i687 = i665[15]
  var i686 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i687.length; i += 2) {
  request.r(i687[i + 0], i687[i + 1], 1, i686, '')
  }
  i664.listAllPlayer = i686
  var i689 = i665[16]
  var i688 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i689.length; i += 2) {
  request.r(i689[i + 0], i689[i + 1], 1, i688, '')
  }
  i664.listAllEnemy = i688
  request.r(i665[17], i665[18], 0, i664, 'Confetti_WinGame')
  i664.isWinGame = !!i665[19]
  i664.isLoseGame = !!i665[20]
  var i691 = i665[21]
  var i690 = []
  for(var i = 0; i < i691.length; i += 2) {
  request.r(i691[i + 0], i691[i + 1], 2, i690, '')
  }
  i664.listCoinBuyPlayer = i690
  request.r(i665[22], i665[23], 0, i664, 'MainPanel')
  request.r(i665[24], i665[25], 0, i664, 'Level_Txt')
  request.r(i665[26], i665[27], 0, i664, 'listBoss')
  var i693 = i665[28]
  var i692 = []
  for(var i = 0; i < i693.length; i += 4) {
    i692.push( new pc.Color(i693[i + 0], i693[i + 1], i693[i + 2], i693[i + 3]) );
  }
  i664.listColor = i692
  request.r(i665[29], i665[30], 0, i664, 'Tutorial1')
  request.r(i665[31], i665[32], 0, i664, 'Tutorial3')
  request.r(i665[33], i665[34], 0, i664, 'PanelLinkGame')
  return i664
}

Deserializers["EntityPosPlayer"] = function (request, data, root) {
  var i696 = root || request.c( 'EntityPosPlayer' )
  var i697 = data
  i696.indexColumn = i697[0]
  i696.indexRow = i697[1]
  return i696
}

Deserializers["EntityInfoPlayer"] = function (request, data, root) {
  var i700 = root || request.c( 'EntityInfoPlayer' )
  var i701 = data
  i700.indexColumn = i701[0]
  i700.indexRow = i701[1]
  i700.typePlayer = i701[2]
  i700.indexLevel = i701[3]
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i712 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i713 = data
  i712.mass = i713[0]
  i712.drag = i713[1]
  i712.angularDrag = i713[2]
  i712.useGravity = !!i713[3]
  i712.isKinematic = !!i713[4]
  i712.constraints = i713[5]
  i712.maxAngularVelocity = i713[6]
  i712.collisionDetectionMode = i713[7]
  i712.interpolation = i713[8]
  return i712
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i714 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i715 = data
  request.r(i715[0], i715[1], 0, i714, 'animatorController')
  i714.updateMode = i715[2]
  var i717 = i715[3]
  var i716 = []
  for(var i = 0; i < i717.length; i += 2) {
  request.r(i717[i + 0], i717[i + 1], 2, i716, '')
  }
  i714.humanBones = i716
  i714.enabled = !!i715[4]
  return i714
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i720 = root || request.c( 'PlayerController' )
  var i721 = data
  i720.isEnemy = !!i721[0]
  i720.isBoss = !!i721[1]
  i720.isBoxCoin = !!i721[2]
  i720.isDie = !!i721[3]
  i720.typePlayer = i721[4]
  i720.indexLevel = i721[5]
  i720.indexColumn = i721[6]
  i720.indexRow = i721[7]
  request.r(i721[8], i721[9], 0, i720, 'EffectMerge')
  request.r(i721[10], i721[11], 0, i720, 'EffectMove')
  request.r(i721[12], i721[13], 0, i720, 'animator')
  request.r(i721[14], i721[15], 0, i720, 'currentWeapon')
  i720.listScalePlayerByLevel = i721[16]
  i720.listHP_PlayerNearByLevel = i721[17]
  i720.listHP_PlayerFarByLevel = i721[18]
  i720.listDamageNear_PlayerByLevel = i721[19]
  i720.listDamageFar_PlayerByLevel = i721[20]
  request.r(i721[21], i721[22], 0, i720, 'HP_Player')
  request.r(i721[23], i721[24], 0, i720, 'HP_Enemy')
  i720.MaxHP = i721[25]
  i720.currentHp = i721[26]
  i720.isMovedPlayer = !!i721[27]
  i720.isSelected = !!i721[28]
  i720.indexGridCurrent = i721[29]
  request.r(i721[30], i721[31], 0, i720, 'CellSelectedObject')
  i720.isTriggerGrid = !!i721[32]
  request.r(i721[33], i721[34], 0, i720, 'MuiTen')
  var i723 = i721[35]
  var i722 = []
  for(var i = 0; i < i723.length; i += 2) {
  request.r(i723[i + 0], i723[i + 1], 2, i722, '')
  }
  i720.listColliderAttackBoss = i722
  request.r(i721[36], i721[37], 0, i720, 'nearPlayer')
  i720.isCollisionPlayer = !!i721[38]
  return i720
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i724 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i725 = data
  i724.enabled = !!i725[0]
  request.r(i725[1], i725[2], 0, i724, 'sharedMaterial')
  var i727 = i725[3]
  var i726 = []
  for(var i = 0; i < i727.length; i += 2) {
  request.r(i727[i + 0], i727[i + 1], 2, i726, '')
  }
  i724.sharedMaterials = i726
  i724.receiveShadows = !!i725[4]
  i724.shadowCastingMode = i725[5]
  i724.sortingLayerID = i725[6]
  i724.sortingOrder = i725[7]
  i724.lightmapIndex = i725[8]
  i724.lightmapSceneIndex = i725[9]
  i724.lightmapScaleOffset = new pc.Vec4( i725[10], i725[11], i725[12], i725[13] )
  i724.lightProbeUsage = i725[14]
  i724.reflectionProbeUsage = i725[15]
  request.r(i725[16], i725[17], 0, i724, 'sharedMesh')
  var i729 = i725[18]
  var i728 = []
  for(var i = 0; i < i729.length; i += 2) {
  request.r(i729[i + 0], i729[i + 1], 2, i728, '')
  }
  i724.bones = i728
  i724.updateWhenOffscreen = !!i725[19]
  i724.localBounds = i725[20]
  request.r(i725[21], i725[22], 0, i724, 'rootBone')
  var i731 = i725[23]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i731[i + 0]) );
  }
  i724.blendShapesWeights = i730
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i734 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i735 = data
  i734.weight = i735[0]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i736 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i737 = data
  i736.pivot = new pc.Vec2( i737[0], i737[1] )
  i736.anchorMin = new pc.Vec2( i737[2], i737[3] )
  i736.anchorMax = new pc.Vec2( i737[4], i737[5] )
  i736.sizeDelta = new pc.Vec2( i737[6], i737[7] )
  i736.anchoredPosition3D = new pc.Vec3( i737[8], i737[9], i737[10] )
  i736.rotation = new pc.Quat(i737[11], i737[12], i737[13], i737[14])
  i736.scale = new pc.Vec3( i737[15], i737[16], i737[17] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i738 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i739 = data
  i738.enabled = !!i739[0]
  i738.planeDistance = i739[1]
  i738.referencePixelsPerUnit = i739[2]
  i738.isFallbackOverlay = !!i739[3]
  i738.renderMode = i739[4]
  i738.renderOrder = i739[5]
  i738.sortingLayerName = i739[6]
  i738.sortingOrder = i739[7]
  i738.scaleFactor = i739[8]
  request.r(i739[9], i739[10], 0, i738, 'worldCamera')
  i738.overrideSorting = !!i739[11]
  i738.pixelPerfect = !!i739[12]
  i738.targetDisplay = i739[13]
  i738.overridePixelPerfect = !!i739[14]
  return i738
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i740 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i741 = data
  i740.m_UiScaleMode = i741[0]
  i740.m_ReferencePixelsPerUnit = i741[1]
  i740.m_ScaleFactor = i741[2]
  i740.m_ReferenceResolution = new pc.Vec2( i741[3], i741[4] )
  i740.m_ScreenMatchMode = i741[5]
  i740.m_MatchWidthOrHeight = i741[6]
  i740.m_PhysicalUnit = i741[7]
  i740.m_FallbackScreenDPI = i741[8]
  i740.m_DefaultSpriteDPI = i741[9]
  i740.m_DynamicPixelsPerUnit = i741[10]
  i740.m_PresetInfoIsWorld = !!i741[11]
  return i740
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i742 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i743 = data
  i742.m_IgnoreReversedGraphics = !!i743[0]
  i742.m_BlockingObjects = i743[1]
  i742.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i743[2] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i744 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i745 = data
  i744.cullTransparentMesh = !!i745[0]
  return i744
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i746 = root || request.c( 'UnityEngine.UI.Image' )
  var i747 = data
  request.r(i747[0], i747[1], 0, i746, 'm_Sprite')
  i746.m_Type = i747[2]
  i746.m_PreserveAspect = !!i747[3]
  i746.m_FillCenter = !!i747[4]
  i746.m_FillMethod = i747[5]
  i746.m_FillAmount = i747[6]
  i746.m_FillClockwise = !!i747[7]
  i746.m_FillOrigin = i747[8]
  i746.m_UseSpriteMesh = !!i747[9]
  i746.m_PixelsPerUnitMultiplier = i747[10]
  request.r(i747[11], i747[12], 0, i746, 'm_Material')
  i746.m_Maskable = !!i747[13]
  i746.m_Color = new pc.Color(i747[14], i747[15], i747[16], i747[17])
  i746.m_RaycastTarget = !!i747[18]
  i746.m_RaycastPadding = new pc.Vec4( i747[19], i747[20], i747[21], i747[22] )
  return i746
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i748 = root || request.c( 'UnityEngine.UI.Text' )
  var i749 = data
  i748.m_FontData = request.d('UnityEngine.UI.FontData', i749[0], i748.m_FontData)
  i748.m_Text = i749[1]
  request.r(i749[2], i749[3], 0, i748, 'm_Material')
  i748.m_Maskable = !!i749[4]
  i748.m_Color = new pc.Color(i749[5], i749[6], i749[7], i749[8])
  i748.m_RaycastTarget = !!i749[9]
  i748.m_RaycastPadding = new pc.Vec4( i749[10], i749[11], i749[12], i749[13] )
  return i748
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i750 = root || request.c( 'UnityEngine.UI.FontData' )
  var i751 = data
  request.r(i751[0], i751[1], 0, i750, 'm_Font')
  i750.m_FontSize = i751[2]
  i750.m_FontStyle = i751[3]
  i750.m_BestFit = !!i751[4]
  i750.m_MinSize = i751[5]
  i750.m_MaxSize = i751[6]
  i750.m_Alignment = i751[7]
  i750.m_AlignByGeometry = !!i751[8]
  i750.m_RichText = !!i751[9]
  i750.m_HorizontalOverflow = i751[10]
  i750.m_VerticalOverflow = i751[11]
  i750.m_LineSpacing = i751[12]
  return i750
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i752 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i753 = data
  i752.m_EffectColor = new pc.Color(i753[0], i753[1], i753[2], i753[3])
  i752.m_EffectDistance = new pc.Vec2( i753[4], i753[5] )
  i752.m_UseGraphicAlpha = !!i753[6]
  return i752
}

Deserializers["DragPlayer"] = function (request, data, root) {
  var i754 = root || request.c( 'DragPlayer' )
  var i755 = data
  i754.IndexCurrentGrid = i755[0]
  var i757 = i755[1]
  var i756 = []
  for(var i = 0; i < i757.length; i += 2) {
  request.r(i757[i + 0], i757[i + 1], 2, i756, '')
  }
  i754.listSkinPlayer = i756
  request.r(i755[2], i755[3], 0, i754, 'UnlockedPlayerPanel')
  request.r(i755[4], i755[5], 0, i754, 'MainPanel')
  i754.isMouseDragging = !!i755[6]
  request.r(i755[7], i755[8], 0, i754, 'target')
  request.r(i755[9], i755[10], 0, i754, 'playerDel')
  i754.isTutorialStep1 = !!i755[11]
  i754.isTutorialStep2 = !!i755[12]
  return i754
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i758 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i759 = data
  request.r(i759[0], i759[1], 0, i758, 'm_FirstSelected')
  i758.m_sendNavigationEvents = !!i759[2]
  i758.m_DragThreshold = i759[3]
  return i758
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i760 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i761 = data
  i760.m_HorizontalAxis = i761[0]
  i760.m_VerticalAxis = i761[1]
  i760.m_SubmitButton = i761[2]
  i760.m_CancelButton = i761[3]
  i760.m_InputActionsPerSecond = i761[4]
  i760.m_RepeatDelay = i761[5]
  i760.m_ForceModuleActive = !!i761[6]
  return i760
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i762 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i763 = data
  return i762
}

Deserializers["FixedUI"] = function (request, data, root) {
  var i764 = root || request.c( 'FixedUI' )
  var i765 = data
  i764.level = i765[0]
  request.r(i765[1], i765[2], 0, i764, 'tuto')
  request.r(i765[3], i765[4], 0, i764, 'fight')
  return i764
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i766 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i767 = data
  i766.m_Spacing = i767[0]
  i766.m_ChildForceExpandWidth = !!i767[1]
  i766.m_ChildForceExpandHeight = !!i767[2]
  i766.m_ChildControlWidth = !!i767[3]
  i766.m_ChildControlHeight = !!i767[4]
  i766.m_ChildScaleWidth = !!i767[5]
  i766.m_ChildScaleHeight = !!i767[6]
  i766.m_ReverseArrangement = !!i767[7]
  i766.m_Padding = UnityEngine.RectOffset.FromPaddings(i767[8], i767[9], i767[10], i767[11])
  i766.m_ChildAlignment = i767[12]
  return i766
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i768 = root || request.c( 'UnityEngine.UI.Button' )
  var i769 = data
  i768.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i769[0], i768.m_OnClick)
  i768.m_Navigation = request.d('UnityEngine.UI.Navigation', i769[1], i768.m_Navigation)
  i768.m_Transition = i769[2]
  i768.m_Colors = request.d('UnityEngine.UI.ColorBlock', i769[3], i768.m_Colors)
  i768.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i769[4], i768.m_SpriteState)
  i768.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i769[5], i768.m_AnimationTriggers)
  i768.m_Interactable = !!i769[6]
  request.r(i769[7], i769[8], 0, i768, 'm_TargetGraphic')
  return i768
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i770 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i771 = data
  i770.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i771[0], i770.m_PersistentCalls)
  return i770
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i772 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i773 = data
  var i775 = i773[0]
  var i774 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i775.length; i += 1) {
    i774.add(request.d('UnityEngine.Events.PersistentCall', i775[i + 0]));
  }
  i772.m_Calls = i774
  return i772
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i778 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'm_Target')
  i778.m_TargetAssemblyTypeName = i779[2]
  i778.m_MethodName = i779[3]
  i778.m_Mode = i779[4]
  i778.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i779[5], i778.m_Arguments)
  i778.m_CallState = i779[6]
  return i778
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i780 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i781 = data
  request.r(i781[0], i781[1], 0, i780, 'm_ObjectArgument')
  i780.m_ObjectArgumentAssemblyTypeName = i781[2]
  i780.m_IntArgument = i781[3]
  i780.m_FloatArgument = i781[4]
  i780.m_StringArgument = i781[5]
  i780.m_BoolArgument = !!i781[6]
  return i780
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i782 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i783 = data
  i782.m_Mode = i783[0]
  i782.m_WrapAround = !!i783[1]
  request.r(i783[2], i783[3], 0, i782, 'm_SelectOnUp')
  request.r(i783[4], i783[5], 0, i782, 'm_SelectOnDown')
  request.r(i783[6], i783[7], 0, i782, 'm_SelectOnLeft')
  request.r(i783[8], i783[9], 0, i782, 'm_SelectOnRight')
  return i782
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i784 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i785 = data
  i784.m_NormalColor = new pc.Color(i785[0], i785[1], i785[2], i785[3])
  i784.m_HighlightedColor = new pc.Color(i785[4], i785[5], i785[6], i785[7])
  i784.m_PressedColor = new pc.Color(i785[8], i785[9], i785[10], i785[11])
  i784.m_SelectedColor = new pc.Color(i785[12], i785[13], i785[14], i785[15])
  i784.m_DisabledColor = new pc.Color(i785[16], i785[17], i785[18], i785[19])
  i784.m_ColorMultiplier = i785[20]
  i784.m_FadeDuration = i785[21]
  return i784
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i786 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i787 = data
  request.r(i787[0], i787[1], 0, i786, 'm_HighlightedSprite')
  request.r(i787[2], i787[3], 0, i786, 'm_PressedSprite')
  request.r(i787[4], i787[5], 0, i786, 'm_SelectedSprite')
  request.r(i787[6], i787[7], 0, i786, 'm_DisabledSprite')
  return i786
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i788 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i789 = data
  i788.m_NormalTrigger = i789[0]
  i788.m_HighlightedTrigger = i789[1]
  i788.m_PressedTrigger = i789[2]
  i788.m_SelectedTrigger = i789[3]
  i788.m_DisabledTrigger = i789[4]
  return i788
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i790 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i791 = data
  i790.enabled = !!i791[0]
  i790.isTrigger = !!i791[1]
  request.r(i791[2], i791[3], 0, i790, 'material')
  request.r(i791[4], i791[5], 0, i790, 'sharedMesh')
  i790.convex = !!i791[6]
  return i790
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i792 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i793 = data
  i792.center = new pc.Vec3( i793[0], i793[1], i793[2] )
  i792.radius = i793[3]
  i792.height = i793[4]
  i792.direction = i793[5]
  i792.enabled = !!i793[6]
  i792.isTrigger = !!i793[7]
  request.r(i793[8], i793[9], 0, i792, 'material')
  return i792
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i794 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i795 = data
  i794.name = i795[0]
  i794.halfPrecision = !!i795[1]
  i794.vertexCount = i795[2]
  i794.aabb = i795[3]
  var i797 = i795[4]
  var i796 = []
  for(var i = 0; i < i797.length; i += 1) {
    i796.push( !!i797[i + 0] );
  }
  i794.streams = i796
  i794.vertices = i795[5]
  var i799 = i795[6]
  var i798 = []
  for(var i = 0; i < i799.length; i += 1) {
    i798.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i799[i + 0]) );
  }
  i794.subMeshes = i798
  var i801 = i795[7]
  var i800 = []
  for(var i = 0; i < i801.length; i += 16) {
    i800.push( new pc.Mat4().setData(i801[i + 0], i801[i + 1], i801[i + 2], i801[i + 3],  i801[i + 4], i801[i + 5], i801[i + 6], i801[i + 7],  i801[i + 8], i801[i + 9], i801[i + 10], i801[i + 11],  i801[i + 12], i801[i + 13], i801[i + 14], i801[i + 15]) );
  }
  i794.bindposes = i800
  var i803 = i795[8]
  var i802 = []
  for(var i = 0; i < i803.length; i += 1) {
    i802.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i803[i + 0]) );
  }
  i794.blendShapes = i802
  return i794
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i808 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i809 = data
  i808.triangles = i809[0]
  return i808
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i814 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i815 = data
  i814.name = i815[0]
  var i817 = i815[1]
  var i816 = []
  for(var i = 0; i < i817.length; i += 1) {
    i816.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i817[i + 0]) );
  }
  i814.frames = i816
  return i814
}

Deserializers["ItemGridControl"] = function (request, data, root) {
  var i818 = root || request.c( 'ItemGridControl' )
  var i819 = data
  i818.Index = i819[0]
  i818.indexColumn = i819[1]
  i818.indexRow = i819[2]
  i818.isContainerPlayer = !!i819[3]
  request.r(i819[4], i819[5], 0, i818, 'GroundMaterial')
  var i821 = i819[6]
  var i820 = []
  for(var i = 0; i < i821.length; i += 2) {
  request.r(i821[i + 0], i821[i + 1], 2, i820, '')
  }
  i818.listGroundMaterial = i820
  i818.layerMask = UnityEngine.LayerMask.FromIntegerValue( i819[7] )
  request.r(i819[8], i819[9], 0, i818, 'playerObjectToMerge')
  var i823 = i819[10]
  var i822 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i823.length; i += 2) {
  request.r(i823[i + 0], i823[i + 1], 1, i822, '')
  }
  i818.listPlayerGrid = i822
  return i818
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i824 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i825 = data
  i824.name = i825[0]
  i824.width = i825[1]
  i824.height = i825[2]
  i824.mipmapCount = i825[3]
  i824.anisoLevel = i825[4]
  i824.filterMode = i825[5]
  i824.hdr = !!i825[6]
  i824.format = i825[7]
  i824.wrapMode = i825[8]
  i824.alphaIsTransparency = !!i825[9]
  i824.alphaSource = i825[10]
  return i824
}

Deserializers["ControlChuong"] = function (request, data, root) {
  var i826 = root || request.c( 'ControlChuong' )
  var i827 = data
  request.r(i827[0], i827[1], 0, i826, 'target')
  request.r(i827[2], i827[3], 0, i826, 'RootPlayer')
  i826.isBoxCoin = !!i827[4]
  i826.indexLevel = i827[5]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i829 = data
  i828.enabled = !!i829[0]
  request.r(i829[1], i829[2], 0, i828, 'sharedMaterial')
  var i831 = i829[3]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.sharedMaterials = i830
  i828.receiveShadows = !!i829[4]
  i828.shadowCastingMode = i829[5]
  i828.sortingLayerID = i829[6]
  i828.sortingOrder = i829[7]
  i828.lightmapIndex = i829[8]
  i828.lightmapSceneIndex = i829[9]
  i828.lightmapScaleOffset = new pc.Vec4( i829[10], i829[11], i829[12], i829[13] )
  i828.lightProbeUsage = i829[14]
  i828.reflectionProbeUsage = i829[15]
  var i833 = i829[16]
  var i832 = []
  for(var i = 0; i < i833.length; i += 3) {
    i832.push( new pc.Vec3( i833[i + 0], i833[i + 1], i833[i + 2] ) );
  }
  i828.positions = i832
  i828.positionCount = i829[17]
  i828.time = i829[18]
  i828.startWidth = i829[19]
  i828.endWidth = i829[20]
  i828.widthMultiplier = i829[21]
  i828.autodestruct = !!i829[22]
  i828.emitting = !!i829[23]
  i828.numCornerVertices = i829[24]
  i828.numCapVertices = i829[25]
  i828.minVertexDistance = i829[26]
  i828.colorGradient = i829[27] ? new pc.ColorGradient(i829[27][0], i829[27][1], i829[27][2]) : null
  i828.startColor = new pc.Color(i829[28], i829[29], i829[30], i829[31])
  i828.endColor = new pc.Color(i829[32], i829[33], i829[34], i829[35])
  i828.generateLightingData = !!i829[36]
  i828.textureMode = i829[37]
  i828.alignment = i829[38]
  i828.widthCurve = new pc.AnimationCurve( { keys_flow: i829[39] } )
  return i828
}

Deserializers["Storelink"] = function (request, data, root) {
  var i836 = root || request.c( 'Storelink' )
  var i837 = data
  return i836
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i839 = data
  i838.name = i839[0]
  i838.atlasId = i839[1]
  i838.mipmapCount = i839[2]
  i838.hdr = !!i839[3]
  i838.size = i839[4]
  i838.anisoLevel = i839[5]
  i838.filterMode = i839[6]
  i838.wrapMode = i839[7]
  var i841 = i839[8]
  var i840 = []
  for(var i = 0; i < i841.length; i += 4) {
    i840.push( UnityEngine.Rect.MinMaxRect(i841[i + 0], i841[i + 1], i841[i + 2], i841[i + 3]) );
  }
  i838.rects = i840
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i844 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i845 = data
  i844.name = i845[0]
  i844.index = i845[1]
  i844.startup = !!i845[2]
  return i844
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i846 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i847 = data
  i846.enabled = !!i847[0]
  i846.aspect = i847[1]
  i846.orthographic = !!i847[2]
  i846.orthographicSize = i847[3]
  i846.backgroundColor = new pc.Color(i847[4], i847[5], i847[6], i847[7])
  i846.nearClipPlane = i847[8]
  i846.farClipPlane = i847[9]
  i846.fieldOfView = i847[10]
  i846.depth = i847[11]
  i846.clearFlags = i847[12]
  i846.cullingMask = i847[13]
  i846.rect = i847[14]
  request.r(i847[15], i847[16], 0, i846, 'targetTexture')
  return i846
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i849 = data
  i848.enabled = !!i849[0]
  i848.type = i849[1]
  i848.color = new pc.Color(i849[2], i849[3], i849[4], i849[5])
  i848.cullingMask = i849[6]
  i848.intensity = i849[7]
  i848.range = i849[8]
  i848.spotAngle = i849[9]
  i848.shadows = i849[10]
  i848.shadowNormalBias = i849[11]
  i848.shadowBias = i849[12]
  i848.shadowStrength = i849[13]
  i848.lightmapBakeType = i849[14]
  i848.renderMode = i849[15]
  request.r(i849[16], i849[17], 0, i848, 'cookie')
  i848.cookieSize = i849[18]
  return i848
}

Deserializers["GameController"] = function (request, data, root) {
  var i850 = root || request.c( 'GameController' )
  var i851 = data
  var i853 = i851[0]
  var i852 = []
  for(var i = 0; i < i853.length; i += 2) {
  request.r(i853[i + 0], i853[i + 1], 2, i852, '')
  }
  i850.level = i852
  return i850
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i854 = root || request.c( 'SoundManager' )
  var i855 = data
  request.r(i855[0], i855[1], 0, i854, 'Click_Audio')
  request.r(i855[2], i855[3], 0, i854, 'Win_Audio')
  request.r(i855[4], i855[5], 0, i854, 'Lose_Audio')
  request.r(i855[6], i855[7], 0, i854, 'MergePlayer_Audio')
  request.r(i855[8], i855[9], 0, i854, 'Runner_Audio')
  request.r(i855[10], i855[11], 0, i854, 'Die_Audio')
  request.r(i855[12], i855[13], 0, i854, 'NearAttack_Audio')
  request.r(i855[14], i855[15], 0, i854, 'FarAttack_Audio')
  request.r(i855[16], i855[17], 0, i854, 'GunShoot_Audio')
  request.r(i855[18], i855[19], 0, i854, 'BuyPlayer_Audio')
  request.r(i855[20], i855[21], 0, i854, 'MovePlayer_Audio')
  return i854
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i856 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i857 = data
  request.r(i857[0], i857[1], 0, i856, 'clip')
  request.r(i857[2], i857[3], 0, i856, 'outputAudioMixerGroup')
  i856.playOnAwake = !!i857[4]
  i856.loop = !!i857[5]
  i856.time = i857[6]
  i856.volume = i857[7]
  i856.pitch = i857[8]
  i856.enabled = !!i857[9]
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i859 = data
  i858.ambientIntensity = i859[0]
  i858.reflectionIntensity = i859[1]
  i858.ambientMode = i859[2]
  i858.ambientLight = new pc.Color(i859[3], i859[4], i859[5], i859[6])
  i858.ambientSkyColor = new pc.Color(i859[7], i859[8], i859[9], i859[10])
  i858.ambientGroundColor = new pc.Color(i859[11], i859[12], i859[13], i859[14])
  i858.ambientEquatorColor = new pc.Color(i859[15], i859[16], i859[17], i859[18])
  i858.fogColor = new pc.Color(i859[19], i859[20], i859[21], i859[22])
  i858.fogEndDistance = i859[23]
  i858.fogStartDistance = i859[24]
  i858.fogDensity = i859[25]
  i858.fog = !!i859[26]
  request.r(i859[27], i859[28], 0, i858, 'skybox')
  i858.fogMode = i859[29]
  var i861 = i859[30]
  var i860 = []
  for(var i = 0; i < i861.length; i += 1) {
    i860.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i861[i + 0]) );
  }
  i858.lightmaps = i860
  i858.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i859[31], i858.lightProbes)
  i858.lightmapsMode = i859[32]
  i858.environmentLightingMode = i859[33]
  i858.ambientProbe = new pc.SphericalHarmonicsL2(i859[34])
  request.r(i859[35], i859[36], 0, i858, 'customReflection')
  request.r(i859[37], i859[38], 0, i858, 'defaultReflection')
  i858.defaultReflectionMode = i859[39]
  i858.defaultReflectionResolution = i859[40]
  i858.sunLightObjectId = i859[41]
  i858.pixelLightCount = i859[42]
  i858.defaultReflectionHDR = !!i859[43]
  i858.hasLightDataAsset = !!i859[44]
  i858.hasManualGenerate = !!i859[45]
  return i858
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i864 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'lightmapColor')
  request.r(i865[2], i865[3], 0, i864, 'lightmapDirection')
  return i864
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i866 = root || new UnityEngine.LightProbes()
  var i867 = data
  return i866
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i872 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i873 = data
  var i875 = i873[0]
  var i874 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i875.length; i += 1) {
    i874.add(i875[i + 0]);
  }
  i872.invalidShaderVariants = i874
  i872.name = i873[1]
  i872.guid = i873[2]
  var i877 = i873[3]
  var i876 = []
  for(var i = 0; i < i877.length; i += 1) {
    i876.push( i877[i + 0] );
  }
  i872.shaderDefinedKeywords = i876
  var i879 = i873[4]
  var i878 = []
  for(var i = 0; i < i879.length; i += 1) {
    i878.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i879[i + 0]) );
  }
  i872.passes = i878
  var i881 = i873[5]
  var i880 = []
  for(var i = 0; i < i881.length; i += 1) {
    i880.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i881[i + 0]) );
  }
  i872.usePasses = i880
  var i883 = i873[6]
  var i882 = []
  for(var i = 0; i < i883.length; i += 1) {
    i882.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i883[i + 0]) );
  }
  i872.defaultParameterValues = i882
  request.r(i873[7], i873[8], 0, i872, 'unityFallbackShader')
  i872.readDepth = !!i873[9]
  i872.isCreatedByShaderGraph = !!i873[10]
  return i872
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i890 = root || new pc.UnityShaderPass()
  var i891 = data
  i890.id = i891[0]
  i890.subShaderIndex = i891[1]
  i890.name = i891[2]
  i890.passType = i891[3]
  i890.usePass = !!i891[4]
  i890.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[5], i890.zTest)
  i890.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[6], i890.zWrite)
  i890.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[7], i890.culling)
  i890.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i891[8], i890.blending)
  i890.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i891[9], i890.alphaBlending)
  i890.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[10], i890.colorWriteMask)
  i890.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[11], i890.offsetUnits)
  i890.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[12], i890.offsetFactor)
  i890.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[13], i890.stencilRef)
  i890.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[14], i890.stencilReadMask)
  i890.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i891[15], i890.stencilWriteMask)
  i890.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i891[16], i890.stencilOp)
  i890.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i891[17], i890.stencilOpFront)
  i890.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i891[18], i890.stencilOpBack)
  var i893 = i891[19]
  var i892 = []
  for(var i = 0; i < i893.length; i += 1) {
    i892.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i893[i + 0]) );
  }
  i890.tags = i892
  var i895 = i891[20]
  var i894 = []
  for(var i = 0; i < i895.length; i += 1) {
    i894.push( i895[i + 0] );
  }
  i890.passDefinedKeywords = i894
  var i897 = i891[21]
  var i896 = []
  for(var i = 0; i < i897.length; i += 1) {
    i896.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i897[i + 0]) );
  }
  i890.variants = i896
  var i899 = i891[22]
  var i898 = []
  for(var i = 0; i < i899.length; i += 1) {
    i898.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i899[i + 0]) );
  }
  i890.excludedVariants = i898
  i890.hasDepthReader = !!i891[23]
  return i890
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i900 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i901 = data
  i900.val = i901[0]
  i900.name = i901[1]
  return i900
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i902 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i903 = data
  i902.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[0], i902.src)
  i902.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[1], i902.dst)
  i902.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i903[2], i902.op)
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i905 = data
  i904.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[0], i904.pass)
  i904.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[1], i904.fail)
  i904.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[2], i904.zFail)
  i904.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i905[3], i904.comp)
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i909 = data
  i908.name = i909[0]
  i908.value = i909[1]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i912 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i913 = data
  i912.passId = i913[0]
  i912.subShaderIndex = i913[1]
  var i915 = i913[2]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( i915[i + 0] );
  }
  i912.keywords = i914
  i912.vertexProgram = i913[3]
  i912.fragmentProgram = i913[4]
  i912.readDepth = !!i913[5]
  return i912
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i918 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i919 = data
  request.r(i919[0], i919[1], 0, i918, 'shader')
  i918.pass = i919[2]
  return i918
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i922 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i923 = data
  i922.name = i923[0]
  i922.type = i923[1]
  i922.value = new pc.Vec4( i923[2], i923[3], i923[4], i923[5] )
  i922.textureValue = i923[6]
  return i922
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i925 = data
  i924.name = i925[0]
  request.r(i925[1], i925[2], 0, i924, 'texture')
  i924.aabb = i925[3]
  i924.vertices = i925[4]
  i924.triangles = i925[5]
  i924.textureRect = UnityEngine.Rect.MinMaxRect(i925[6], i925[7], i925[8], i925[9])
  i924.packedRect = UnityEngine.Rect.MinMaxRect(i925[10], i925[11], i925[12], i925[13])
  i924.border = new pc.Vec4( i925[14], i925[15], i925[16], i925[17] )
  i924.transparency = i925[18]
  i924.bounds = i925[19]
  i924.pixelsPerUnit = i925[20]
  i924.textureWidth = i925[21]
  i924.textureHeight = i925[22]
  i924.nativeSize = new pc.Vec2( i925[23], i925[24] )
  i924.pivot = new pc.Vec2( i925[25], i925[26] )
  i924.textureRectOffset = new pc.Vec2( i925[27], i925[28] )
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i926 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i927 = data
  i926.name = i927[0]
  return i926
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i928 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i929 = data
  i928.name = i929[0]
  i928.wrapMode = i929[1]
  i928.isLooping = !!i929[2]
  i928.length = i929[3]
  var i931 = i929[4]
  var i930 = []
  for(var i = 0; i < i931.length; i += 1) {
    i930.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i931[i + 0]) );
  }
  i928.curves = i930
  var i933 = i929[5]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i933[i + 0]) );
  }
  i928.events = i932
  i928.halfPrecision = !!i929[6]
  return i928
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i936 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i937 = data
  i936.path = i937[0]
  i936.componentType = i937[1]
  i936.property = i937[2]
  i936.keys = i937[3]
  var i939 = i937[4]
  var i938 = []
  for(var i = 0; i < i939.length; i += 1) {
    i938.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i939[i + 0]) );
  }
  i936.objectReferenceKeys = i938
  return i936
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i943 = data
  i942.time = i943[0]
  request.r(i943[1], i943[2], 0, i942, 'value')
  return i942
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i946 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i947 = data
  i946.functionName = i947[0]
  i946.floatParameter = i947[1]
  i946.intParameter = i947[2]
  i946.stringParameter = i947[3]
  request.r(i947[4], i947[5], 0, i946, 'objectReferenceParameter')
  i946.time = i947[6]
  return i946
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i948 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i949 = data
  i948.name = i949[0]
  i948.ascent = i949[1]
  i948.originalLineHeight = i949[2]
  i948.fontSize = i949[3]
  var i951 = i949[4]
  var i950 = []
  for(var i = 0; i < i951.length; i += 1) {
    i950.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i951[i + 0]) );
  }
  i948.characterInfo = i950
  request.r(i949[5], i949[6], 0, i948, 'texture')
  i948.originalFontSize = i949[7]
  return i948
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i954 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i955 = data
  i954.index = i955[0]
  i954.advance = i955[1]
  i954.bearing = i955[2]
  i954.glyphWidth = i955[3]
  i954.glyphHeight = i955[4]
  i954.minX = i955[5]
  i954.maxX = i955[6]
  i954.minY = i955[7]
  i954.maxY = i955[8]
  i954.uvBottomLeftX = i955[9]
  i954.uvBottomLeftY = i955[10]
  i954.uvBottomRightX = i955[11]
  i954.uvBottomRightY = i955[12]
  i954.uvTopLeftX = i955[13]
  i954.uvTopLeftY = i955[14]
  i954.uvTopRightX = i955[15]
  i954.uvTopRightY = i955[16]
  return i954
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i956 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i957 = data
  i956.name = i957[0]
  var i959 = i957[1]
  var i958 = []
  for(var i = 0; i < i959.length; i += 1) {
    i958.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i959[i + 0]) );
  }
  i956.states = i958
  var i961 = i957[2]
  var i960 = []
  for(var i = 0; i < i961.length; i += 1) {
    i960.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i961[i + 0]) );
  }
  i956.layers = i960
  var i963 = i957[3]
  var i962 = []
  for(var i = 0; i < i963.length; i += 1) {
    i962.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i963[i + 0]) );
  }
  i956.parameters = i962
  var i965 = i957[4]
  var i964 = []
  for(var i = 0; i < i965.length; i += 1) {
    i964.push( i965[i + 0] );
  }
  i956.animationClips = i964
  return i956
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i968 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i969 = data
  i968.cycleOffset = i969[0]
  i968.cycleOffsetParameter = i969[1]
  i968.cycleOffsetParameterActive = !!i969[2]
  i968.mirror = !!i969[3]
  i968.mirrorParameter = i969[4]
  i968.mirrorParameterActive = !!i969[5]
  i968.motionId = i969[6]
  i968.nameHash = i969[7]
  i968.fullPathHash = i969[8]
  i968.speed = i969[9]
  i968.speedParameter = i969[10]
  i968.speedParameterActive = !!i969[11]
  i968.tag = i969[12]
  i968.name = i969[13]
  i968.writeDefaultValues = !!i969[14]
  var i971 = i969[15]
  var i970 = []
  for(var i = 0; i < i971.length; i += 1) {
    i970.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i971[i + 0]) );
  }
  i968.transitions = i970
  var i973 = i969[16]
  var i972 = []
  for(var i = 0; i < i973.length; i += 2) {
  request.r(i973[i + 0], i973[i + 1], 2, i972, '')
  }
  i968.behaviours = i972
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i976 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i977 = data
  i976.fullPath = i977[0]
  i976.canTransitionToSelf = !!i977[1]
  i976.duration = i977[2]
  i976.exitTime = i977[3]
  i976.hasExitTime = !!i977[4]
  i976.hasFixedDuration = !!i977[5]
  i976.interruptionSource = i977[6]
  i976.offset = i977[7]
  i976.orderedInterruption = !!i977[8]
  i976.destinationStateNameHash = i977[9]
  i976.destinationStateMachineId = i977[10]
  i976.isExit = !!i977[11]
  i976.mute = !!i977[12]
  i976.solo = !!i977[13]
  var i979 = i977[14]
  var i978 = []
  for(var i = 0; i < i979.length; i += 1) {
    i978.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i979[i + 0]) );
  }
  i976.conditions = i978
  return i976
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i982 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i983 = data
  i982.mode = i983[0]
  i982.parameter = i983[1]
  i982.threshold = i983[2]
  return i982
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i988 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i989 = data
  i988.blendingMode = i989[0]
  i988.defaultWeight = i989[1]
  i988.name = i989[2]
  i988.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i989[3], i988.stateMachine)
  return i988
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i990 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i991 = data
  i990.id = i991[0]
  i990.defaultStateNameHash = i991[1]
  var i993 = i991[2]
  var i992 = []
  for(var i = 0; i < i993.length; i += 1) {
    i992.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i993[i + 0]) );
  }
  i990.entryTransitions = i992
  var i995 = i991[3]
  var i994 = []
  for(var i = 0; i < i995.length; i += 1) {
    i994.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i995[i + 0]) );
  }
  i990.anyStateTransitions = i994
  return i990
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i998 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i999 = data
  i998.destinationStateNameHash = i999[0]
  i998.destinationStateMachineId = i999[1]
  i998.isExit = !!i999[2]
  i998.mute = !!i999[3]
  i998.solo = !!i999[4]
  var i1001 = i999[5]
  var i1000 = []
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1001[i + 0]) );
  }
  i998.conditions = i1000
  return i998
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1004 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1005 = data
  i1004.defaultBool = !!i1005[0]
  i1004.defaultFloat = i1005[1]
  i1004.defaultInt = i1005[2]
  i1004.name = i1005[3]
  i1004.nameHash = i1005[4]
  i1004.type = i1005[5]
  return i1004
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1006 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1007 = data
  var i1009 = i1007[0]
  var i1008 = []
  for(var i = 0; i < i1009.length; i += 1) {
    i1008.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1009[i + 0]) );
  }
  i1006.files = i1008
  i1006.componentToPrefabIds = i1007[1]
  return i1006
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1012 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1013 = data
  i1012.path = i1013[0]
  request.r(i1013[1], i1013[2], 0, i1012, 'unityObject')
  return i1012
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1014 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1015 = data
  var i1017 = i1015[0]
  var i1016 = []
  for(var i = 0; i < i1017.length; i += 1) {
    i1016.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1017[i + 0]) );
  }
  i1014.scriptsExecutionOrder = i1016
  var i1019 = i1015[1]
  var i1018 = []
  for(var i = 0; i < i1019.length; i += 1) {
    i1018.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1019[i + 0]) );
  }
  i1014.sortingLayers = i1018
  var i1021 = i1015[2]
  var i1020 = []
  for(var i = 0; i < i1021.length; i += 1) {
    i1020.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1021[i + 0]) );
  }
  i1014.cullingLayers = i1020
  i1014.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1015[3], i1014.timeSettings)
  i1014.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1015[4], i1014.physicsSettings)
  i1014.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1015[5], i1014.physics2DSettings)
  i1014.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1015[6], i1014.qualitySettings)
  i1014.removeShadows = !!i1015[7]
  i1014.autoInstantiatePrefabs = !!i1015[8]
  i1014.enableAutoInstancing = !!i1015[9]
  i1014.lightmapEncodingQuality = i1015[10]
  i1014.desiredColorSpace = i1015[11]
  return i1014
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1024 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1025 = data
  i1024.name = i1025[0]
  i1024.value = i1025[1]
  return i1024
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1028 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1029 = data
  i1028.id = i1029[0]
  i1028.name = i1029[1]
  i1028.value = i1029[2]
  return i1028
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1032 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1033 = data
  i1032.id = i1033[0]
  i1032.name = i1033[1]
  return i1032
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1034 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1035 = data
  i1034.fixedDeltaTime = i1035[0]
  i1034.maximumDeltaTime = i1035[1]
  i1034.timeScale = i1035[2]
  i1034.maximumParticleTimestep = i1035[3]
  return i1034
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1036 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1037 = data
  i1036.gravity = new pc.Vec3( i1037[0], i1037[1], i1037[2] )
  i1036.defaultSolverIterations = i1037[3]
  i1036.bounceThreshold = i1037[4]
  i1036.autoSyncTransforms = !!i1037[5]
  i1036.autoSimulation = !!i1037[6]
  var i1039 = i1037[7]
  var i1038 = []
  for(var i = 0; i < i1039.length; i += 1) {
    i1038.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1039[i + 0]) );
  }
  i1036.collisionMatrix = i1038
  return i1036
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1042 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1043 = data
  i1042.enabled = !!i1043[0]
  i1042.layerId = i1043[1]
  i1042.otherLayerId = i1043[2]
  return i1042
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1044 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1045 = data
  request.r(i1045[0], i1045[1], 0, i1044, 'material')
  i1044.gravity = new pc.Vec2( i1045[2], i1045[3] )
  i1044.positionIterations = i1045[4]
  i1044.velocityIterations = i1045[5]
  i1044.velocityThreshold = i1045[6]
  i1044.maxLinearCorrection = i1045[7]
  i1044.maxAngularCorrection = i1045[8]
  i1044.maxTranslationSpeed = i1045[9]
  i1044.maxRotationSpeed = i1045[10]
  i1044.timeToSleep = i1045[11]
  i1044.linearSleepTolerance = i1045[12]
  i1044.angularSleepTolerance = i1045[13]
  i1044.defaultContactOffset = i1045[14]
  i1044.autoSimulation = !!i1045[15]
  i1044.queriesHitTriggers = !!i1045[16]
  i1044.queriesStartInColliders = !!i1045[17]
  i1044.callbacksOnDisable = !!i1045[18]
  i1044.reuseCollisionCallbacks = !!i1045[19]
  i1044.autoSyncTransforms = !!i1045[20]
  var i1047 = i1045[21]
  var i1046 = []
  for(var i = 0; i < i1047.length; i += 1) {
    i1046.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1047[i + 0]) );
  }
  i1044.collisionMatrix = i1046
  return i1044
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1050 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1051 = data
  i1050.enabled = !!i1051[0]
  i1050.layerId = i1051[1]
  i1050.otherLayerId = i1051[2]
  return i1050
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1052 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1053 = data
  var i1055 = i1053[0]
  var i1054 = []
  for(var i = 0; i < i1055.length; i += 1) {
    i1054.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1055[i + 0]) );
  }
  i1052.qualityLevels = i1054
  var i1057 = i1053[1]
  var i1056 = []
  for(var i = 0; i < i1057.length; i += 1) {
    i1056.push( i1057[i + 0] );
  }
  i1052.names = i1056
  i1052.shadows = i1053[2]
  i1052.anisotropicFiltering = i1053[3]
  i1052.antiAliasing = i1053[4]
  i1052.lodBias = i1053[5]
  i1052.shadowCascades = i1053[6]
  i1052.shadowDistance = i1053[7]
  i1052.shadowmaskMode = i1053[8]
  i1052.shadowProjection = i1053[9]
  i1052.shadowResolution = i1053[10]
  i1052.softParticles = !!i1053[11]
  i1052.softVegetation = !!i1053[12]
  i1052.activeColorSpace = i1053[13]
  i1052.desiredColorSpace = i1053[14]
  i1052.masterTextureLimit = i1053[15]
  i1052.maxQueuedFrames = i1053[16]
  i1052.particleRaycastBudget = i1053[17]
  i1052.pixelLightCount = i1053[18]
  i1052.realtimeReflectionProbes = !!i1053[19]
  i1052.shadowCascade2Split = i1053[20]
  i1052.shadowCascade4Split = new pc.Vec3( i1053[21], i1053[22], i1053[23] )
  i1052.streamingMipmapsActive = !!i1053[24]
  i1052.vSyncCount = i1053[25]
  i1052.asyncUploadBufferSize = i1053[26]
  i1052.asyncUploadTimeSlice = i1053[27]
  i1052.billboardsFaceCameraPosition = !!i1053[28]
  i1052.shadowNearPlaneOffset = i1053[29]
  i1052.streamingMipmapsMemoryBudget = i1053[30]
  i1052.maximumLODLevel = i1053[31]
  i1052.streamingMipmapsAddAllCameras = !!i1053[32]
  i1052.streamingMipmapsMaxLevelReduction = i1053[33]
  i1052.streamingMipmapsRenderersPerFrame = i1053[34]
  i1052.resolutionScalingFixedDPIFactor = i1053[35]
  i1052.streamingMipmapsMaxFileIORequests = i1053[36]
  i1052.currentQualityLevel = i1053[37]
  return i1052
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1062 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1063 = data
  i1062.weight = i1063[0]
  i1062.vertices = i1063[1]
  i1062.normals = i1063[2]
  i1062.tangents = i1063[3]
  return i1062
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"50":[51],"52":[51],"53":[51],"54":[51],"55":[51],"56":[51],"57":[17],"58":[42],"59":[13],"60":[13],"61":[13],"62":[13],"63":[13],"64":[13],"65":[13],"66":[67],"68":[67],"69":[67],"70":[67],"71":[67],"72":[67],"73":[67],"74":[67],"75":[67],"76":[67],"77":[67],"78":[67],"79":[67],"80":[42],"81":[7],"82":[83],"84":[83],"19":[18],"85":[23,2,18],"86":[18],"87":[23,18],"88":[7],"89":[23,18],"90":[18],"91":[7,18],"92":[18,23],"93":[18],"94":[18],"95":[18],"22":[19],"24":[23,18],"96":[18],"21":[19],"97":[18],"98":[18],"33":[18],"99":[18],"100":[18],"101":[18],"102":[18],"103":[18],"104":[18],"105":[23,18],"106":[18],"107":[18],"108":[18],"109":[18],"12":[23,18],"110":[18],"111":[28],"112":[28],"29":[28],"113":[28],"114":[42],"115":[42],"116":[34]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","CreateGridPlayer","UnityEngine.GameObject","UnityEngine.UI.Text","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","PlayerController","UnityEngine.SkinnedMeshRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Shadow","DragPlayer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","FixedUI","UnityEngine.Font","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","ItemGridControl","UnityEngine.Texture2D","ControlChuong","UnityEngine.TrailRenderer","Storelink","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","GameController","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.UIParticleSystem","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Purchasing.IAPButton"]

Deserializers.unityVersion = "2020.3.36f1";

Deserializers.productName = "Toy Playable";

Deserializers.lunaInitializationTime = "09/08/2022 17:06:56";

Deserializers.lunaDaysRunning = "0.6";

Deserializers.lunaVersion = "3.12.0";

Deserializers.lunaSHA = "ae3e1c51dc31f375c7aae66345de1c1fcffa9c7d";

Deserializers.creativeName = "build_fix_MB_Final";

Deserializers.lunaAppID = "13189";

Deserializers.projectId = "18930699-f56b-43f3-9900-34801e922552";

Deserializers.packagesInfo = "com.unity.textmeshpro: 3.0.6\ncom.unity.timeline: 1.4.8\ncom.unity.ugui: 1.0.0";

Deserializers.externalJsLibraries = "";

Deserializers.androidLink = "https://play.google.com/store/apps/details?id=com.mori.mergetoy.master";

Deserializers.iosLink = "https://apps.apple.com/mm/app/merge-master-toy-battle/id1633811187";

Deserializers.base64Enabled = "False";

Deserializers.minifyEnabled = "True";

Deserializers.isForceUncompressed = "False";

Deserializers.isAntiAliasingEnabled = "False";

Deserializers.isAutoInstantiatePrefabsEnabled = "True";

Deserializers.isRuntimeAnalysisEnabledForCode = "False";

Deserializers.runtimeAnalysisExcludedClassesCount = "1025";

Deserializers.runtimeAnalysisExcludedMethodsCount = "3466";

Deserializers.runtimeAnalysisExcludedModules = "physics2d, reflection";

Deserializers.isRuntimeAnalysisEnabledForShaders = "True";

Deserializers.companyName = "Mori";

Deserializers.buildPlatform = "StandaloneWindows64";

Deserializers.applicationIdentifier = "com.Mori.Toy-Playable";

Deserializers.disableAntiAliasing = true;

Deserializers.buildID = "f11cb06c-3e4f-4d42-b271-53d5f0bfb58a";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

