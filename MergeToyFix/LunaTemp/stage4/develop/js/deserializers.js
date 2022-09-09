var Deserializers = {}
Deserializers["UnityEngine.JointSpring"] = function (request, data, root) {
  var i646 = root || request.c( 'UnityEngine.JointSpring' )
  var i647 = data
  i646.spring = i647[0]
  i646.damper = i647[1]
  i646.targetPosition = i647[2]
  return i646
}

Deserializers["UnityEngine.JointMotor"] = function (request, data, root) {
  var i648 = root || request.c( 'UnityEngine.JointMotor' )
  var i649 = data
  i648.m_TargetVelocity = i649[0]
  i648.m_Force = i649[1]
  i648.m_FreeSpin = i649[2]
  return i648
}

Deserializers["UnityEngine.JointLimits"] = function (request, data, root) {
  var i650 = root || request.c( 'UnityEngine.JointLimits' )
  var i651 = data
  i650.m_Min = i651[0]
  i650.m_Max = i651[1]
  i650.m_Bounciness = i651[2]
  i650.m_BounceMinVelocity = i651[3]
  i650.m_ContactDistance = i651[4]
  i650.minBounce = i651[5]
  i650.maxBounce = i651[6]
  return i650
}

Deserializers["UnityEngine.JointDrive"] = function (request, data, root) {
  var i652 = root || request.c( 'UnityEngine.JointDrive' )
  var i653 = data
  i652.m_PositionSpring = i653[0]
  i652.m_PositionDamper = i653[1]
  i652.m_MaximumForce = i653[2]
  return i652
}

Deserializers["UnityEngine.SoftJointLimitSpring"] = function (request, data, root) {
  var i654 = root || request.c( 'UnityEngine.SoftJointLimitSpring' )
  var i655 = data
  i654.m_Spring = i655[0]
  i654.m_Damper = i655[1]
  return i654
}

Deserializers["UnityEngine.SoftJointLimit"] = function (request, data, root) {
  var i656 = root || request.c( 'UnityEngine.SoftJointLimit' )
  var i657 = data
  i656.m_Limit = i657[0]
  i656.m_Bounciness = i657[1]
  i656.m_ContactDistance = i657[2]
  return i656
}

Deserializers["UnityEngine.WheelFrictionCurve"] = function (request, data, root) {
  var i658 = root || request.c( 'UnityEngine.WheelFrictionCurve' )
  var i659 = data
  i658.m_ExtremumSlip = i659[0]
  i658.m_ExtremumValue = i659[1]
  i658.m_AsymptoteSlip = i659[2]
  i658.m_AsymptoteValue = i659[3]
  i658.m_Stiffness = i659[4]
  return i658
}

Deserializers["UnityEngine.JointAngleLimits2D"] = function (request, data, root) {
  var i660 = root || request.c( 'UnityEngine.JointAngleLimits2D' )
  var i661 = data
  i660.m_LowerAngle = i661[0]
  i660.m_UpperAngle = i661[1]
  return i660
}

Deserializers["UnityEngine.JointMotor2D"] = function (request, data, root) {
  var i662 = root || request.c( 'UnityEngine.JointMotor2D' )
  var i663 = data
  i662.m_MotorSpeed = i663[0]
  i662.m_MaximumMotorTorque = i663[1]
  return i662
}

Deserializers["UnityEngine.JointSuspension2D"] = function (request, data, root) {
  var i664 = root || request.c( 'UnityEngine.JointSuspension2D' )
  var i665 = data
  i664.m_DampingRatio = i665[0]
  i664.m_Frequency = i665[1]
  i664.m_Angle = i665[2]
  return i664
}

Deserializers["UnityEngine.JointTranslationLimits2D"] = function (request, data, root) {
  var i666 = root || request.c( 'UnityEngine.JointTranslationLimits2D' )
  var i667 = data
  i666.m_LowerTranslation = i667[0]
  i666.m_UpperTranslation = i667[1]
  return i666
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material"] = function (request, data, root) {
  var i668 = root || new pc.UnityMaterial()
  var i669 = data
  i668.name = i669[0]
  request.r(i669[1], i669[2], 0, i668, 'shader')
  i668.renderQueue = i669[3]
  i668.enableInstancing = !!i669[4]
  var i671 = i669[5]
  var i670 = []
  for(var i = 0; i < i671.length; i += 1) {
    i670.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter', i671[i + 0]) );
  }
  i668.floatParameters = i670
  var i673 = i669[6]
  var i672 = []
  for(var i = 0; i < i673.length; i += 1) {
    i672.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter', i673[i + 0]) );
  }
  i668.colorParameters = i672
  var i675 = i669[7]
  var i674 = []
  for(var i = 0; i < i675.length; i += 1) {
    i674.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter', i675[i + 0]) );
  }
  i668.vectorParameters = i674
  var i677 = i669[8]
  var i676 = []
  for(var i = 0; i < i677.length; i += 1) {
    i676.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter', i677[i + 0]) );
  }
  i668.textureParameters = i676
  var i679 = i669[9]
  var i678 = []
  for(var i = 0; i < i679.length; i += 1) {
    i678.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag', i679[i + 0]) );
  }
  i668.materialFlags = i678
  return i668
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter"] = function (request, data, root) {
  var i682 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter' )
  var i683 = data
  i682.name = i683[0]
  i682.value = i683[1]
  return i682
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter"] = function (request, data, root) {
  var i686 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter' )
  var i687 = data
  i686.name = i687[0]
  i686.value = new pc.Color(i687[1], i687[2], i687[3], i687[4])
  return i686
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter"] = function (request, data, root) {
  var i690 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter' )
  var i691 = data
  i690.name = i691[0]
  i690.value = new pc.Vec4( i691[1], i691[2], i691[3], i691[4] )
  return i690
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter"] = function (request, data, root) {
  var i694 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter' )
  var i695 = data
  i694.name = i695[0]
  request.r(i695[1], i695[2], 0, i694, 'value')
  return i694
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag"] = function (request, data, root) {
  var i698 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag' )
  var i699 = data
  i698.name = i699[0]
  i698.enabled = !!i699[1]
  return i698
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Transform"] = function (request, data, root) {
  var i700 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Transform' )
  var i701 = data
  i700.position = new pc.Vec3( i701[0], i701[1], i701[2] )
  i700.scale = new pc.Vec3( i701[3], i701[4], i701[5] )
  i700.rotation = new pc.Quat(i701[6], i701[7], i701[8], i701[9])
  return i700
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystem"] = function (request, data, root) {
  var i702 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystem' )
  var i703 = data
  i702.main = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule', i703[0], i702.main)
  i702.colorBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule', i703[1], i702.colorBySpeed)
  i702.colorOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule', i703[2], i702.colorOverLifetime)
  i702.emission = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule', i703[3], i702.emission)
  i702.rotationBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule', i703[4], i702.rotationBySpeed)
  i702.rotationOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule', i703[5], i702.rotationOverLifetime)
  i702.shape = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule', i703[6], i702.shape)
  i702.sizeBySpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule', i703[7], i702.sizeBySpeed)
  i702.sizeOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule', i703[8], i702.sizeOverLifetime)
  i702.textureSheetAnimation = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule', i703[9], i702.textureSheetAnimation)
  i702.velocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule', i703[10], i702.velocityOverLifetime)
  i702.noise = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule', i703[11], i702.noise)
  i702.inheritVelocity = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule', i703[12], i702.inheritVelocity)
  i702.forceOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule', i703[13], i702.forceOverLifetime)
  i702.limitVelocityOverLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule', i703[14], i702.limitVelocityOverLifetime)
  i702.useAutoRandomSeed = !!i703[15]
  i702.randomSeed = i703[16]
  return i702
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule"] = function (request, data, root) {
  var i704 = root || new pc.ParticleSystemMain()
  var i705 = data
  i704.duration = i705[0]
  i704.loop = !!i705[1]
  i704.prewarm = !!i705[2]
  i704.startDelay = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[3], i704.startDelay)
  i704.startLifetime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[4], i704.startLifetime)
  i704.startSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[5], i704.startSpeed)
  i704.startSize3D = !!i705[6]
  i704.startSizeX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[7], i704.startSizeX)
  i704.startSizeY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[8], i704.startSizeY)
  i704.startSizeZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[9], i704.startSizeZ)
  i704.startRotation3D = !!i705[10]
  i704.startRotationX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[11], i704.startRotationX)
  i704.startRotationY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[12], i704.startRotationY)
  i704.startRotationZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[13], i704.startRotationZ)
  i704.startColor = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i705[14], i704.startColor)
  i704.gravityModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i705[15], i704.gravityModifier)
  i704.simulationSpace = i705[16]
  request.r(i705[17], i705[18], 0, i704, 'customSimulationSpace')
  i704.simulationSpeed = i705[19]
  i704.useUnscaledTime = !!i705[20]
  i704.scalingMode = i705[21]
  i704.playOnAwake = !!i705[22]
  i704.maxParticles = i705[23]
  i704.emitterVelocityMode = i705[24]
  i704.stopAction = i705[25]
  return i704
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve"] = function (request, data, root) {
  var i706 = root || new pc.MinMaxCurve()
  var i707 = data
  i706.mode = i707[0]
  i706.curveMin = new pc.AnimationCurve( { keys_flow: i707[1] } )
  i706.curveMax = new pc.AnimationCurve( { keys_flow: i707[2] } )
  i706.curveMultiplier = i707[3]
  i706.constantMin = i707[4]
  i706.constantMax = i707[5]
  return i706
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient"] = function (request, data, root) {
  var i708 = root || new pc.MinMaxGradient()
  var i709 = data
  i708.mode = i709[0]
  i708.gradientMin = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i709[1], i708.gradientMin)
  i708.gradientMax = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient', i709[2], i708.gradientMax)
  i708.colorMin = new pc.Color(i709[3], i709[4], i709[5], i709[6])
  i708.colorMax = new pc.Color(i709[7], i709[8], i709[9], i709[10])
  return i708
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient"] = function (request, data, root) {
  var i710 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient' )
  var i711 = data
  i710.mode = i711[0]
  var i713 = i711[1]
  var i712 = []
  for(var i = 0; i < i713.length; i += 1) {
    i712.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey', i713[i + 0]) );
  }
  i710.colorKeys = i712
  var i715 = i711[2]
  var i714 = []
  for(var i = 0; i < i715.length; i += 1) {
    i714.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey', i715[i + 0]) );
  }
  i710.alphaKeys = i714
  return i710
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey"] = function (request, data, root) {
  var i718 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey' )
  var i719 = data
  i718.color = new pc.Color(i719[0], i719[1], i719[2], i719[3])
  i718.time = i719[4]
  return i718
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey"] = function (request, data, root) {
  var i722 = root || request.c( 'Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey' )
  var i723 = data
  i722.alpha = i723[0]
  i722.time = i723[1]
  return i722
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule"] = function (request, data, root) {
  var i724 = root || new pc.ParticleSystemColorBySpeed()
  var i725 = data
  i724.enabled = !!i725[0]
  i724.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i725[1], i724.color)
  i724.range = new pc.Vec2( i725[2], i725[3] )
  return i724
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule"] = function (request, data, root) {
  var i726 = root || new pc.ParticleSystemColorOverLifetime()
  var i727 = data
  i726.enabled = !!i727[0]
  i726.color = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient', i727[1], i726.color)
  return i726
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule"] = function (request, data, root) {
  var i728 = root || new pc.ParticleSystemEmitter()
  var i729 = data
  i728.enabled = !!i729[0]
  i728.rateOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[1], i728.rateOverTime)
  i728.rateOverDistance = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i729[2], i728.rateOverDistance)
  var i731 = i729[3]
  var i730 = []
  for(var i = 0; i < i731.length; i += 1) {
    i730.push( request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst', i731[i + 0]) );
  }
  i728.bursts = i730
  return i728
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst"] = function (request, data, root) {
  var i734 = root || new pc.ParticleSystemBurst()
  var i735 = data
  i734.count = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i735[0], i734.count)
  i734.cycleCount = i735[1]
  i734.minCount = i735[2]
  i734.maxCount = i735[3]
  i734.repeatInterval = i735[4]
  i734.time = i735[5]
  return i734
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule"] = function (request, data, root) {
  var i736 = root || new pc.ParticleSystemRotationBySpeed()
  var i737 = data
  i736.enabled = !!i737[0]
  i736.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[1], i736.x)
  i736.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[2], i736.y)
  i736.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i737[3], i736.z)
  i736.separateAxes = !!i737[4]
  i736.range = new pc.Vec2( i737[5], i737[6] )
  return i736
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule"] = function (request, data, root) {
  var i738 = root || new pc.ParticleSystemRotationOverLifetime()
  var i739 = data
  i738.enabled = !!i739[0]
  i738.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[1], i738.x)
  i738.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[2], i738.y)
  i738.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i739[3], i738.z)
  i738.separateAxes = !!i739[4]
  return i738
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule"] = function (request, data, root) {
  var i740 = root || new pc.ParticleSystemShape()
  var i741 = data
  i740.enabled = !!i741[0]
  i740.shapeType = i741[1]
  i740.randomDirectionAmount = i741[2]
  i740.sphericalDirectionAmount = i741[3]
  i740.randomPositionAmount = i741[4]
  i740.alignToDirection = !!i741[5]
  i740.radius = i741[6]
  i740.radiusMode = i741[7]
  i740.radiusSpread = i741[8]
  i740.radiusSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[9], i740.radiusSpeed)
  i740.radiusThickness = i741[10]
  i740.angle = i741[11]
  i740.length = i741[12]
  i740.boxThickness = new pc.Vec3( i741[13], i741[14], i741[15] )
  i740.meshShapeType = i741[16]
  request.r(i741[17], i741[18], 0, i740, 'mesh')
  request.r(i741[19], i741[20], 0, i740, 'meshRenderer')
  request.r(i741[21], i741[22], 0, i740, 'skinnedMeshRenderer')
  i740.useMeshMaterialIndex = !!i741[23]
  i740.meshMaterialIndex = i741[24]
  i740.useMeshColors = !!i741[25]
  i740.normalOffset = i741[26]
  i740.arc = i741[27]
  i740.arcMode = i741[28]
  i740.arcSpread = i741[29]
  i740.arcSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i741[30], i740.arcSpeed)
  i740.donutRadius = i741[31]
  i740.position = new pc.Vec3( i741[32], i741[33], i741[34] )
  i740.rotation = new pc.Vec3( i741[35], i741[36], i741[37] )
  i740.scale = new pc.Vec3( i741[38], i741[39], i741[40] )
  return i740
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule"] = function (request, data, root) {
  var i742 = root || new pc.ParticleSystemSizeBySpeed()
  var i743 = data
  i742.enabled = !!i743[0]
  i742.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[1], i742.x)
  i742.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[2], i742.y)
  i742.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i743[3], i742.z)
  i742.separateAxes = !!i743[4]
  i742.range = new pc.Vec2( i743[5], i743[6] )
  return i742
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule"] = function (request, data, root) {
  var i744 = root || new pc.ParticleSystemSizeOverLifetime()
  var i745 = data
  i744.enabled = !!i745[0]
  i744.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[1], i744.x)
  i744.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[2], i744.y)
  i744.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i745[3], i744.z)
  i744.separateAxes = !!i745[4]
  return i744
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule"] = function (request, data, root) {
  var i746 = root || new pc.ParticleSystemTextureSheetAnimation()
  var i747 = data
  i746.enabled = !!i747[0]
  i746.mode = i747[1]
  i746.animation = i747[2]
  i746.numTilesX = i747[3]
  i746.numTilesY = i747[4]
  i746.useRandomRow = !!i747[5]
  i746.frameOverTime = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[6], i746.frameOverTime)
  i746.startFrame = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i747[7], i746.startFrame)
  i746.cycleCount = i747[8]
  i746.rowIndex = i747[9]
  i746.flipU = i747[10]
  i746.flipV = i747[11]
  i746.spriteCount = i747[12]
  var i749 = i747[13]
  var i748 = []
  for(var i = 0; i < i749.length; i += 2) {
  request.r(i749[i + 0], i749[i + 1], 2, i748, '')
  }
  i746.sprites = i748
  return i746
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule"] = function (request, data, root) {
  var i752 = root || new pc.ParticleSystemVelocityOverLifetime()
  var i753 = data
  i752.enabled = !!i753[0]
  i752.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[1], i752.x)
  i752.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[2], i752.y)
  i752.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[3], i752.z)
  i752.speedModifier = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i753[4], i752.speedModifier)
  i752.space = i753[5]
  return i752
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule"] = function (request, data, root) {
  var i754 = root || new pc.ParticleSystemNoise()
  var i755 = data
  i754.enabled = !!i755[0]
  i754.separateAxes = !!i755[1]
  i754.strengthX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[2], i754.strengthX)
  i754.strengthY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[3], i754.strengthY)
  i754.strengthZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[4], i754.strengthZ)
  i754.frequency = i755[5]
  i754.damping = !!i755[6]
  i754.octaveCount = i755[7]
  i754.octaveMultiplier = i755[8]
  i754.octaveScale = i755[9]
  i754.quality = i755[10]
  i754.scrollSpeed = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[11], i754.scrollSpeed)
  i754.scrollSpeedMultiplier = i755[12]
  i754.remapEnabled = !!i755[13]
  i754.remapX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[14], i754.remapX)
  i754.remapY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[15], i754.remapY)
  i754.remapZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[16], i754.remapZ)
  i754.positionAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[17], i754.positionAmount)
  i754.rotationAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[18], i754.rotationAmount)
  i754.sizeAmount = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i755[19], i754.sizeAmount)
  return i754
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule"] = function (request, data, root) {
  var i756 = root || new pc.ParticleSystemInheritVelocity()
  var i757 = data
  i756.enabled = !!i757[0]
  i756.mode = i757[1]
  i756.curve = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i757[2], i756.curve)
  return i756
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule"] = function (request, data, root) {
  var i758 = root || new pc.ParticleSystemForceOverLifetime()
  var i759 = data
  i758.enabled = !!i759[0]
  i758.x = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[1], i758.x)
  i758.y = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[2], i758.y)
  i758.z = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i759[3], i758.z)
  i758.space = i759[4]
  i758.randomized = !!i759[5]
  return i758
}

Deserializers["Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule"] = function (request, data, root) {
  var i760 = root || new pc.ParticleSystemLimitVelocityOverLifetime()
  var i761 = data
  i760.enabled = !!i761[0]
  i760.limitX = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[1], i760.limitX)
  i760.limitY = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[2], i760.limitY)
  i760.limitZ = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[3], i760.limitZ)
  i760.dampen = i761[4]
  i760.separateAxes = !!i761[5]
  i760.space = i761[6]
  i760.drag = request.d('Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve', i761[7], i760.drag)
  i760.multiplyDragByParticleSize = !!i761[8]
  i760.multiplyDragByParticleVelocity = !!i761[9]
  return i760
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer"] = function (request, data, root) {
  var i762 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer' )
  var i763 = data
  i762.enabled = !!i763[0]
  request.r(i763[1], i763[2], 0, i762, 'sharedMaterial')
  var i765 = i763[3]
  var i764 = []
  for(var i = 0; i < i765.length; i += 2) {
  request.r(i765[i + 0], i765[i + 1], 2, i764, '')
  }
  i762.sharedMaterials = i764
  i762.receiveShadows = !!i763[4]
  i762.shadowCastingMode = i763[5]
  i762.sortingLayerID = i763[6]
  i762.sortingOrder = i763[7]
  i762.lightmapIndex = i763[8]
  i762.lightmapSceneIndex = i763[9]
  i762.lightmapScaleOffset = new pc.Vec4( i763[10], i763[11], i763[12], i763[13] )
  i762.lightProbeUsage = i763[14]
  i762.reflectionProbeUsage = i763[15]
  request.r(i763[16], i763[17], 0, i762, 'mesh')
  i762.meshCount = i763[18]
  i762.activeVertexStreamsCount = i763[19]
  i762.alignment = i763[20]
  i762.renderMode = i763[21]
  i762.sortMode = i763[22]
  i762.lengthScale = i763[23]
  i762.velocityScale = i763[24]
  i762.cameraVelocityScale = i763[25]
  i762.normalDirection = i763[26]
  i762.sortingFudge = i763[27]
  i762.minParticleSize = i763[28]
  i762.maxParticleSize = i763[29]
  i762.pivot = new pc.Vec3( i763[30], i763[31], i763[32] )
  request.r(i763[33], i763[34], 0, i762, 'trailMaterial')
  return i762
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.GameObject"] = function (request, data, root) {
  var i768 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.GameObject' )
  var i769 = data
  i768.name = i769[0]
  i768.tag = i769[1]
  i768.enabled = !!i769[2]
  i768.isStatic = !!i769[3]
  i768.layer = i769[4]
  return i768
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshFilter"] = function (request, data, root) {
  var i770 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshFilter' )
  var i771 = data
  request.r(i771[0], i771[1], 0, i770, 'sharedMesh')
  return i770
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshRenderer"] = function (request, data, root) {
  var i772 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshRenderer' )
  var i773 = data
  request.r(i773[0], i773[1], 0, i772, 'additionalVertexStreams')
  i772.enabled = !!i773[2]
  request.r(i773[3], i773[4], 0, i772, 'sharedMaterial')
  var i775 = i773[5]
  var i774 = []
  for(var i = 0; i < i775.length; i += 2) {
  request.r(i775[i + 0], i775[i + 1], 2, i774, '')
  }
  i772.sharedMaterials = i774
  i772.receiveShadows = !!i773[6]
  i772.shadowCastingMode = i773[7]
  i772.sortingLayerID = i773[8]
  i772.sortingOrder = i773[9]
  i772.lightmapIndex = i773[10]
  i772.lightmapSceneIndex = i773[11]
  i772.lightmapScaleOffset = new pc.Vec4( i773[12], i773[13], i773[14], i773[15] )
  i772.lightProbeUsage = i773[16]
  i772.reflectionProbeUsage = i773[17]
  return i772
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.BoxCollider"] = function (request, data, root) {
  var i776 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.BoxCollider' )
  var i777 = data
  i776.center = new pc.Vec3( i777[0], i777[1], i777[2] )
  i776.size = new pc.Vec3( i777[3], i777[4], i777[5] )
  i776.enabled = !!i777[6]
  i776.isTrigger = !!i777[7]
  request.r(i777[8], i777[9], 0, i776, 'material')
  return i776
}

Deserializers["CreateGridPlayer"] = function (request, data, root) {
  var i778 = root || request.c( 'CreateGridPlayer' )
  var i779 = data
  request.r(i779[0], i779[1], 0, i778, 'ObjectGroundGrid')
  var i781 = i779[2]
  var i780 = new (System.Collections.Generic.List$1(Bridge.ns('EntityPosPlayer')))
  for(var i = 0; i < i781.length; i += 1) {
    i780.add(request.d('EntityPosPlayer', i781[i + 0]));
  }
  i778.listPosContainerPlayer = i780
  var i783 = i779[3]
  var i782 = new (System.Collections.Generic.List$1(Bridge.ns('EntityInfoPlayer')))
  for(var i = 0; i < i783.length; i += 1) {
    i782.add(request.d('EntityInfoPlayer', i783[i + 0]));
  }
  i778.listInfoPlayer = i782
  var i785 = i779[4]
  var i784 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i785.length; i += 1) {
    i784.add(i785[i + 0]);
  }
  i778.listUnlockedPlayerNear = i784
  var i787 = i779[5]
  var i786 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i787.length; i += 1) {
    i786.add(i787[i + 0]);
  }
  i778.listUnlockedPlayerFar = i786
  var i789 = i779[6]
  var i788 = new (System.Collections.Generic.List$1(Bridge.ns('System.Int32')))
  for(var i = 0; i < i789.length; i += 1) {
    i788.add(i789[i + 0]);
  }
  i778.listUnlockedPlayerPhep = i788
  var i791 = i779[7]
  var i790 = []
  for(var i = 0; i < i791.length; i += 2) {
  request.r(i791[i + 0], i791[i + 1], 2, i790, '')
  }
  i778.listPosShowEnemy = i790
  request.r(i779[8], i779[9], 0, i778, 'ParentListPlayer')
  var i793 = i779[10]
  var i792 = []
  for(var i = 0; i < i793.length; i += 2) {
  request.r(i793[i + 0], i793[i + 1], 2, i792, '')
  }
  i778.listPlayerNear = i792
  var i795 = i779[11]
  var i794 = []
  for(var i = 0; i < i795.length; i += 2) {
  request.r(i795[i + 0], i795[i + 1], 2, i794, '')
  }
  i778.listPlayerFar = i794
  var i797 = i779[12]
  var i796 = []
  for(var i = 0; i < i797.length; i += 2) {
  request.r(i797[i + 0], i797[i + 1], 2, i796, '')
  }
  i778.listPlayerPhep = i796
  i778.isStartFight = !!i779[13]
  var i799 = i779[14]
  var i798 = []
  for(var i = 0; i < i799.length; i += 2) {
  request.r(i799[i + 0], i799[i + 1], 2, i798, '')
  }
  i778.listObjectButton = i798
  var i801 = i779[15]
  var i800 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i801.length; i += 2) {
  request.r(i801[i + 0], i801[i + 1], 1, i800, '')
  }
  i778.listAllPlayer = i800
  var i803 = i779[16]
  var i802 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i803.length; i += 2) {
  request.r(i803[i + 0], i803[i + 1], 1, i802, '')
  }
  i778.listAllEnemy = i802
  request.r(i779[17], i779[18], 0, i778, 'Confetti_WinGame')
  i778.isWinGame = !!i779[19]
  i778.isLoseGame = !!i779[20]
  var i805 = i779[21]
  var i804 = []
  for(var i = 0; i < i805.length; i += 2) {
  request.r(i805[i + 0], i805[i + 1], 2, i804, '')
  }
  i778.listCoinBuyPlayer = i804
  request.r(i779[22], i779[23], 0, i778, 'MainPanel')
  request.r(i779[24], i779[25], 0, i778, 'Level_Txt')
  request.r(i779[26], i779[27], 0, i778, 'listBoss')
  var i807 = i779[28]
  var i806 = []
  for(var i = 0; i < i807.length; i += 4) {
    i806.push( new pc.Color(i807[i + 0], i807[i + 1], i807[i + 2], i807[i + 3]) );
  }
  i778.listColor = i806
  request.r(i779[29], i779[30], 0, i778, 'Tutorial1')
  request.r(i779[31], i779[32], 0, i778, 'Tutorial3')
  request.r(i779[33], i779[34], 0, i778, 'PanelLinkGame')
  return i778
}

Deserializers["EntityPosPlayer"] = function (request, data, root) {
  var i810 = root || request.c( 'EntityPosPlayer' )
  var i811 = data
  i810.indexColumn = i811[0]
  i810.indexRow = i811[1]
  return i810
}

Deserializers["EntityInfoPlayer"] = function (request, data, root) {
  var i814 = root || request.c( 'EntityInfoPlayer' )
  var i815 = data
  i814.indexColumn = i815[0]
  i814.indexRow = i815[1]
  i814.typePlayer = i815[2]
  i814.indexLevel = i815[3]
  return i814
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Rigidbody"] = function (request, data, root) {
  var i826 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Rigidbody' )
  var i827 = data
  i826.mass = i827[0]
  i826.drag = i827[1]
  i826.angularDrag = i827[2]
  i826.useGravity = !!i827[3]
  i826.isKinematic = !!i827[4]
  i826.constraints = i827[5]
  i826.maxAngularVelocity = i827[6]
  i826.collisionDetectionMode = i827[7]
  i826.interpolation = i827[8]
  return i826
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Animator"] = function (request, data, root) {
  var i828 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Animator' )
  var i829 = data
  request.r(i829[0], i829[1], 0, i828, 'animatorController')
  i828.updateMode = i829[2]
  var i831 = i829[3]
  var i830 = []
  for(var i = 0; i < i831.length; i += 2) {
  request.r(i831[i + 0], i831[i + 1], 2, i830, '')
  }
  i828.humanBones = i830
  i828.enabled = !!i829[4]
  return i828
}

Deserializers["PlayerController"] = function (request, data, root) {
  var i834 = root || request.c( 'PlayerController' )
  var i835 = data
  i834.isEnemy = !!i835[0]
  i834.isBoss = !!i835[1]
  i834.isBoxCoin = !!i835[2]
  i834.isDie = !!i835[3]
  i834.typePlayer = i835[4]
  i834.indexLevel = i835[5]
  i834.indexColumn = i835[6]
  i834.indexRow = i835[7]
  request.r(i835[8], i835[9], 0, i834, 'EffectMerge')
  request.r(i835[10], i835[11], 0, i834, 'EffectMove')
  request.r(i835[12], i835[13], 0, i834, 'animator')
  request.r(i835[14], i835[15], 0, i834, 'currentWeapon')
  i834.listScalePlayerByLevel = i835[16]
  i834.listHP_PlayerNearByLevel = i835[17]
  i834.listHP_PlayerFarByLevel = i835[18]
  i834.listDamageNear_PlayerByLevel = i835[19]
  i834.listDamageFar_PlayerByLevel = i835[20]
  request.r(i835[21], i835[22], 0, i834, 'HP_Player')
  request.r(i835[23], i835[24], 0, i834, 'HP_Enemy')
  i834.MaxHP = i835[25]
  i834.currentHp = i835[26]
  i834.isMovedPlayer = !!i835[27]
  i834.isSelected = !!i835[28]
  i834.indexGridCurrent = i835[29]
  request.r(i835[30], i835[31], 0, i834, 'CellSelectedObject')
  i834.isTriggerGrid = !!i835[32]
  request.r(i835[33], i835[34], 0, i834, 'MuiTen')
  var i837 = i835[35]
  var i836 = []
  for(var i = 0; i < i837.length; i += 2) {
  request.r(i837[i + 0], i837[i + 1], 2, i836, '')
  }
  i834.listColliderAttackBoss = i836
  request.r(i835[36], i835[37], 0, i834, 'nearPlayer')
  i834.isCollisionPlayer = !!i835[38]
  return i834
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer"] = function (request, data, root) {
  var i838 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer' )
  var i839 = data
  i838.enabled = !!i839[0]
  request.r(i839[1], i839[2], 0, i838, 'sharedMaterial')
  var i841 = i839[3]
  var i840 = []
  for(var i = 0; i < i841.length; i += 2) {
  request.r(i841[i + 0], i841[i + 1], 2, i840, '')
  }
  i838.sharedMaterials = i840
  i838.receiveShadows = !!i839[4]
  i838.shadowCastingMode = i839[5]
  i838.sortingLayerID = i839[6]
  i838.sortingOrder = i839[7]
  i838.lightmapIndex = i839[8]
  i838.lightmapSceneIndex = i839[9]
  i838.lightmapScaleOffset = new pc.Vec4( i839[10], i839[11], i839[12], i839[13] )
  i838.lightProbeUsage = i839[14]
  i838.reflectionProbeUsage = i839[15]
  request.r(i839[16], i839[17], 0, i838, 'sharedMesh')
  var i843 = i839[18]
  var i842 = []
  for(var i = 0; i < i843.length; i += 2) {
  request.r(i843[i + 0], i843[i + 1], 2, i842, '')
  }
  i838.bones = i842
  i838.updateWhenOffscreen = !!i839[19]
  i838.localBounds = i839[20]
  request.r(i839[21], i839[22], 0, i838, 'rootBone')
  var i845 = i839[23]
  var i844 = []
  for(var i = 0; i < i845.length; i += 1) {
    i844.push( request.d('Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight', i845[i + 0]) );
  }
  i838.blendShapesWeights = i844
  return i838
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight"] = function (request, data, root) {
  var i848 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight' )
  var i849 = data
  i848.weight = i849[0]
  return i848
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.RectTransform"] = function (request, data, root) {
  var i850 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.RectTransform' )
  var i851 = data
  i850.pivot = new pc.Vec2( i851[0], i851[1] )
  i850.anchorMin = new pc.Vec2( i851[2], i851[3] )
  i850.anchorMax = new pc.Vec2( i851[4], i851[5] )
  i850.sizeDelta = new pc.Vec2( i851[6], i851[7] )
  i850.anchoredPosition3D = new pc.Vec3( i851[8], i851[9], i851[10] )
  i850.rotation = new pc.Quat(i851[11], i851[12], i851[13], i851[14])
  i850.scale = new pc.Vec3( i851[15], i851[16], i851[17] )
  return i850
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Canvas"] = function (request, data, root) {
  var i852 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Canvas' )
  var i853 = data
  i852.enabled = !!i853[0]
  i852.planeDistance = i853[1]
  i852.referencePixelsPerUnit = i853[2]
  i852.isFallbackOverlay = !!i853[3]
  i852.renderMode = i853[4]
  i852.renderOrder = i853[5]
  i852.sortingLayerName = i853[6]
  i852.sortingOrder = i853[7]
  i852.scaleFactor = i853[8]
  request.r(i853[9], i853[10], 0, i852, 'worldCamera')
  i852.overrideSorting = !!i853[11]
  i852.pixelPerfect = !!i853[12]
  i852.targetDisplay = i853[13]
  i852.overridePixelPerfect = !!i853[14]
  return i852
}

Deserializers["UnityEngine.UI.CanvasScaler"] = function (request, data, root) {
  var i854 = root || request.c( 'UnityEngine.UI.CanvasScaler' )
  var i855 = data
  i854.m_UiScaleMode = i855[0]
  i854.m_ReferencePixelsPerUnit = i855[1]
  i854.m_ScaleFactor = i855[2]
  i854.m_ReferenceResolution = new pc.Vec2( i855[3], i855[4] )
  i854.m_ScreenMatchMode = i855[5]
  i854.m_MatchWidthOrHeight = i855[6]
  i854.m_PhysicalUnit = i855[7]
  i854.m_FallbackScreenDPI = i855[8]
  i854.m_DefaultSpriteDPI = i855[9]
  i854.m_DynamicPixelsPerUnit = i855[10]
  i854.m_PresetInfoIsWorld = !!i855[11]
  return i854
}

Deserializers["UnityEngine.UI.GraphicRaycaster"] = function (request, data, root) {
  var i856 = root || request.c( 'UnityEngine.UI.GraphicRaycaster' )
  var i857 = data
  i856.m_IgnoreReversedGraphics = !!i857[0]
  i856.m_BlockingObjects = i857[1]
  i856.m_BlockingMask = UnityEngine.LayerMask.FromIntegerValue( i857[2] )
  return i856
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer"] = function (request, data, root) {
  var i858 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer' )
  var i859 = data
  i858.cullTransparentMesh = !!i859[0]
  return i858
}

Deserializers["UnityEngine.UI.Image"] = function (request, data, root) {
  var i860 = root || request.c( 'UnityEngine.UI.Image' )
  var i861 = data
  request.r(i861[0], i861[1], 0, i860, 'm_Sprite')
  i860.m_Type = i861[2]
  i860.m_PreserveAspect = !!i861[3]
  i860.m_FillCenter = !!i861[4]
  i860.m_FillMethod = i861[5]
  i860.m_FillAmount = i861[6]
  i860.m_FillClockwise = !!i861[7]
  i860.m_FillOrigin = i861[8]
  i860.m_UseSpriteMesh = !!i861[9]
  i860.m_PixelsPerUnitMultiplier = i861[10]
  request.r(i861[11], i861[12], 0, i860, 'm_Material')
  i860.m_Maskable = !!i861[13]
  i860.m_Color = new pc.Color(i861[14], i861[15], i861[16], i861[17])
  i860.m_RaycastTarget = !!i861[18]
  i860.m_RaycastPadding = new pc.Vec4( i861[19], i861[20], i861[21], i861[22] )
  return i860
}

Deserializers["UnityEngine.UI.Text"] = function (request, data, root) {
  var i862 = root || request.c( 'UnityEngine.UI.Text' )
  var i863 = data
  i862.m_FontData = request.d('UnityEngine.UI.FontData', i863[0], i862.m_FontData)
  i862.m_Text = i863[1]
  request.r(i863[2], i863[3], 0, i862, 'm_Material')
  i862.m_Maskable = !!i863[4]
  i862.m_Color = new pc.Color(i863[5], i863[6], i863[7], i863[8])
  i862.m_RaycastTarget = !!i863[9]
  i862.m_RaycastPadding = new pc.Vec4( i863[10], i863[11], i863[12], i863[13] )
  return i862
}

Deserializers["UnityEngine.UI.FontData"] = function (request, data, root) {
  var i864 = root || request.c( 'UnityEngine.UI.FontData' )
  var i865 = data
  request.r(i865[0], i865[1], 0, i864, 'm_Font')
  i864.m_FontSize = i865[2]
  i864.m_FontStyle = i865[3]
  i864.m_BestFit = !!i865[4]
  i864.m_MinSize = i865[5]
  i864.m_MaxSize = i865[6]
  i864.m_Alignment = i865[7]
  i864.m_AlignByGeometry = !!i865[8]
  i864.m_RichText = !!i865[9]
  i864.m_HorizontalOverflow = i865[10]
  i864.m_VerticalOverflow = i865[11]
  i864.m_LineSpacing = i865[12]
  return i864
}

Deserializers["UnityEngine.UI.Shadow"] = function (request, data, root) {
  var i866 = root || request.c( 'UnityEngine.UI.Shadow' )
  var i867 = data
  i866.m_EffectColor = new pc.Color(i867[0], i867[1], i867[2], i867[3])
  i866.m_EffectDistance = new pc.Vec2( i867[4], i867[5] )
  i866.m_UseGraphicAlpha = !!i867[6]
  return i866
}

Deserializers["DragPlayer"] = function (request, data, root) {
  var i868 = root || request.c( 'DragPlayer' )
  var i869 = data
  i868.IndexCurrentGrid = i869[0]
  var i871 = i869[1]
  var i870 = []
  for(var i = 0; i < i871.length; i += 2) {
  request.r(i871[i + 0], i871[i + 1], 2, i870, '')
  }
  i868.listSkinPlayer = i870
  request.r(i869[2], i869[3], 0, i868, 'UnlockedPlayerPanel')
  request.r(i869[4], i869[5], 0, i868, 'MainPanel')
  i868.isMouseDragging = !!i869[6]
  request.r(i869[7], i869[8], 0, i868, 'target')
  request.r(i869[9], i869[10], 0, i868, 'playerDel')
  i868.isTutorialStep1 = !!i869[11]
  i868.isTutorialStep2 = !!i869[12]
  return i868
}

Deserializers["UnityEngine.EventSystems.EventSystem"] = function (request, data, root) {
  var i872 = root || request.c( 'UnityEngine.EventSystems.EventSystem' )
  var i873 = data
  request.r(i873[0], i873[1], 0, i872, 'm_FirstSelected')
  i872.m_sendNavigationEvents = !!i873[2]
  i872.m_DragThreshold = i873[3]
  return i872
}

Deserializers["UnityEngine.EventSystems.StandaloneInputModule"] = function (request, data, root) {
  var i874 = root || request.c( 'UnityEngine.EventSystems.StandaloneInputModule' )
  var i875 = data
  i874.m_HorizontalAxis = i875[0]
  i874.m_VerticalAxis = i875[1]
  i874.m_SubmitButton = i875[2]
  i874.m_CancelButton = i875[3]
  i874.m_InputActionsPerSecond = i875[4]
  i874.m_RepeatDelay = i875[5]
  i874.m_ForceModuleActive = !!i875[6]
  return i874
}

Deserializers["UnityEngine.EventSystems.BaseInput"] = function (request, data, root) {
  var i876 = root || request.c( 'UnityEngine.EventSystems.BaseInput' )
  var i877 = data
  return i876
}

Deserializers["FixedUI"] = function (request, data, root) {
  var i878 = root || request.c( 'FixedUI' )
  var i879 = data
  i878.level = i879[0]
  request.r(i879[1], i879[2], 0, i878, 'tuto')
  request.r(i879[3], i879[4], 0, i878, 'fight')
  return i878
}

Deserializers["UnityEngine.UI.HorizontalLayoutGroup"] = function (request, data, root) {
  var i880 = root || request.c( 'UnityEngine.UI.HorizontalLayoutGroup' )
  var i881 = data
  i880.m_Spacing = i881[0]
  i880.m_ChildForceExpandWidth = !!i881[1]
  i880.m_ChildForceExpandHeight = !!i881[2]
  i880.m_ChildControlWidth = !!i881[3]
  i880.m_ChildControlHeight = !!i881[4]
  i880.m_ChildScaleWidth = !!i881[5]
  i880.m_ChildScaleHeight = !!i881[6]
  i880.m_ReverseArrangement = !!i881[7]
  i880.m_Padding = UnityEngine.RectOffset.FromPaddings(i881[8], i881[9], i881[10], i881[11])
  i880.m_ChildAlignment = i881[12]
  return i880
}

Deserializers["UnityEngine.UI.Button"] = function (request, data, root) {
  var i882 = root || request.c( 'UnityEngine.UI.Button' )
  var i883 = data
  i882.m_OnClick = request.d('UnityEngine.UI.Button+ButtonClickedEvent', i883[0], i882.m_OnClick)
  i882.m_Navigation = request.d('UnityEngine.UI.Navigation', i883[1], i882.m_Navigation)
  i882.m_Transition = i883[2]
  i882.m_Colors = request.d('UnityEngine.UI.ColorBlock', i883[3], i882.m_Colors)
  i882.m_SpriteState = request.d('UnityEngine.UI.SpriteState', i883[4], i882.m_SpriteState)
  i882.m_AnimationTriggers = request.d('UnityEngine.UI.AnimationTriggers', i883[5], i882.m_AnimationTriggers)
  i882.m_Interactable = !!i883[6]
  request.r(i883[7], i883[8], 0, i882, 'm_TargetGraphic')
  return i882
}

Deserializers["UnityEngine.UI.Button+ButtonClickedEvent"] = function (request, data, root) {
  var i884 = root || request.c( 'UnityEngine.UI.Button+ButtonClickedEvent' )
  var i885 = data
  i884.m_PersistentCalls = request.d('UnityEngine.Events.PersistentCallGroup', i885[0], i884.m_PersistentCalls)
  return i884
}

Deserializers["UnityEngine.Events.PersistentCallGroup"] = function (request, data, root) {
  var i886 = root || request.c( 'UnityEngine.Events.PersistentCallGroup' )
  var i887 = data
  var i889 = i887[0]
  var i888 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.Events.PersistentCall')))
  for(var i = 0; i < i889.length; i += 1) {
    i888.add(request.d('UnityEngine.Events.PersistentCall', i889[i + 0]));
  }
  i886.m_Calls = i888
  return i886
}

Deserializers["UnityEngine.Events.PersistentCall"] = function (request, data, root) {
  var i892 = root || request.c( 'UnityEngine.Events.PersistentCall' )
  var i893 = data
  request.r(i893[0], i893[1], 0, i892, 'm_Target')
  i892.m_TargetAssemblyTypeName = i893[2]
  i892.m_MethodName = i893[3]
  i892.m_Mode = i893[4]
  i892.m_Arguments = request.d('UnityEngine.Events.ArgumentCache', i893[5], i892.m_Arguments)
  i892.m_CallState = i893[6]
  return i892
}

Deserializers["UnityEngine.Events.ArgumentCache"] = function (request, data, root) {
  var i894 = root || request.c( 'UnityEngine.Events.ArgumentCache' )
  var i895 = data
  request.r(i895[0], i895[1], 0, i894, 'm_ObjectArgument')
  i894.m_ObjectArgumentAssemblyTypeName = i895[2]
  i894.m_IntArgument = i895[3]
  i894.m_FloatArgument = i895[4]
  i894.m_StringArgument = i895[5]
  i894.m_BoolArgument = !!i895[6]
  return i894
}

Deserializers["UnityEngine.UI.Navigation"] = function (request, data, root) {
  var i896 = root || request.c( 'UnityEngine.UI.Navigation' )
  var i897 = data
  i896.m_Mode = i897[0]
  i896.m_WrapAround = !!i897[1]
  request.r(i897[2], i897[3], 0, i896, 'm_SelectOnUp')
  request.r(i897[4], i897[5], 0, i896, 'm_SelectOnDown')
  request.r(i897[6], i897[7], 0, i896, 'm_SelectOnLeft')
  request.r(i897[8], i897[9], 0, i896, 'm_SelectOnRight')
  return i896
}

Deserializers["UnityEngine.UI.ColorBlock"] = function (request, data, root) {
  var i898 = root || request.c( 'UnityEngine.UI.ColorBlock' )
  var i899 = data
  i898.m_NormalColor = new pc.Color(i899[0], i899[1], i899[2], i899[3])
  i898.m_HighlightedColor = new pc.Color(i899[4], i899[5], i899[6], i899[7])
  i898.m_PressedColor = new pc.Color(i899[8], i899[9], i899[10], i899[11])
  i898.m_SelectedColor = new pc.Color(i899[12], i899[13], i899[14], i899[15])
  i898.m_DisabledColor = new pc.Color(i899[16], i899[17], i899[18], i899[19])
  i898.m_ColorMultiplier = i899[20]
  i898.m_FadeDuration = i899[21]
  return i898
}

Deserializers["UnityEngine.UI.SpriteState"] = function (request, data, root) {
  var i900 = root || request.c( 'UnityEngine.UI.SpriteState' )
  var i901 = data
  request.r(i901[0], i901[1], 0, i900, 'm_HighlightedSprite')
  request.r(i901[2], i901[3], 0, i900, 'm_PressedSprite')
  request.r(i901[4], i901[5], 0, i900, 'm_SelectedSprite')
  request.r(i901[6], i901[7], 0, i900, 'm_DisabledSprite')
  return i900
}

Deserializers["UnityEngine.UI.AnimationTriggers"] = function (request, data, root) {
  var i902 = root || request.c( 'UnityEngine.UI.AnimationTriggers' )
  var i903 = data
  i902.m_NormalTrigger = i903[0]
  i902.m_HighlightedTrigger = i903[1]
  i902.m_PressedTrigger = i903[2]
  i902.m_SelectedTrigger = i903[3]
  i902.m_DisabledTrigger = i903[4]
  return i902
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.MeshCollider"] = function (request, data, root) {
  var i904 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.MeshCollider' )
  var i905 = data
  i904.enabled = !!i905[0]
  i904.isTrigger = !!i905[1]
  request.r(i905[2], i905[3], 0, i904, 'material')
  request.r(i905[4], i905[5], 0, i904, 'sharedMesh')
  i904.convex = !!i905[6]
  return i904
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider"] = function (request, data, root) {
  var i906 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider' )
  var i907 = data
  i906.center = new pc.Vec3( i907[0], i907[1], i907[2] )
  i906.radius = i907[3]
  i906.height = i907[4]
  i906.direction = i907[5]
  i906.enabled = !!i907[6]
  i906.isTrigger = !!i907[7]
  request.r(i907[8], i907[9], 0, i906, 'material')
  return i906
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Texture2D"] = function (request, data, root) {
  var i908 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Texture2D' )
  var i909 = data
  i908.name = i909[0]
  i908.width = i909[1]
  i908.height = i909[2]
  i908.mipmapCount = i909[3]
  i908.anisoLevel = i909[4]
  i908.filterMode = i909[5]
  i908.hdr = !!i909[6]
  i908.format = i909[7]
  i908.wrapMode = i909[8]
  i908.alphaIsTransparency = !!i909[9]
  i908.alphaSource = i909[10]
  return i908
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh"] = function (request, data, root) {
  var i910 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh' )
  var i911 = data
  i910.name = i911[0]
  i910.halfPrecision = !!i911[1]
  i910.vertexCount = i911[2]
  i910.aabb = i911[3]
  var i913 = i911[4]
  var i912 = []
  for(var i = 0; i < i913.length; i += 1) {
    i912.push( !!i913[i + 0] );
  }
  i910.streams = i912
  i910.vertices = i911[5]
  var i915 = i911[6]
  var i914 = []
  for(var i = 0; i < i915.length; i += 1) {
    i914.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh', i915[i + 0]) );
  }
  i910.subMeshes = i914
  var i917 = i911[7]
  var i916 = []
  for(var i = 0; i < i917.length; i += 16) {
    i916.push( new pc.Mat4().setData(i917[i + 0], i917[i + 1], i917[i + 2], i917[i + 3],  i917[i + 4], i917[i + 5], i917[i + 6], i917[i + 7],  i917[i + 8], i917[i + 9], i917[i + 10], i917[i + 11],  i917[i + 12], i917[i + 13], i917[i + 14], i917[i + 15]) );
  }
  i910.bindposes = i916
  var i919 = i911[8]
  var i918 = []
  for(var i = 0; i < i919.length; i += 1) {
    i918.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape', i919[i + 0]) );
  }
  i910.blendShapes = i918
  return i910
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh"] = function (request, data, root) {
  var i924 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh' )
  var i925 = data
  i924.triangles = i925[0]
  return i924
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape"] = function (request, data, root) {
  var i930 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape' )
  var i931 = data
  i930.name = i931[0]
  var i933 = i931[1]
  var i932 = []
  for(var i = 0; i < i933.length; i += 1) {
    i932.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame', i933[i + 0]) );
  }
  i930.frames = i932
  return i930
}

Deserializers["ItemGridControl"] = function (request, data, root) {
  var i934 = root || request.c( 'ItemGridControl' )
  var i935 = data
  i934.Index = i935[0]
  i934.indexColumn = i935[1]
  i934.indexRow = i935[2]
  i934.isContainerPlayer = !!i935[3]
  request.r(i935[4], i935[5], 0, i934, 'GroundMaterial')
  var i937 = i935[6]
  var i936 = []
  for(var i = 0; i < i937.length; i += 2) {
  request.r(i937[i + 0], i937[i + 1], 2, i936, '')
  }
  i934.listGroundMaterial = i936
  i934.layerMask = UnityEngine.LayerMask.FromIntegerValue( i935[7] )
  request.r(i935[8], i935[9], 0, i934, 'playerObjectToMerge')
  var i939 = i935[10]
  var i938 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.GameObject')))
  for(var i = 0; i < i939.length; i += 2) {
  request.r(i939[i + 0], i939[i + 1], 1, i938, '')
  }
  i934.listPlayerGrid = i938
  return i934
}

Deserializers["ControlChuong"] = function (request, data, root) {
  var i940 = root || request.c( 'ControlChuong' )
  var i941 = data
  request.r(i941[0], i941[1], 0, i940, 'target')
  request.r(i941[2], i941[3], 0, i940, 'RootPlayer')
  i940.isBoxCoin = !!i941[4]
  i940.indexLevel = i941[5]
  return i940
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.TrailRenderer"] = function (request, data, root) {
  var i942 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.TrailRenderer' )
  var i943 = data
  i942.enabled = !!i943[0]
  request.r(i943[1], i943[2], 0, i942, 'sharedMaterial')
  var i945 = i943[3]
  var i944 = []
  for(var i = 0; i < i945.length; i += 2) {
  request.r(i945[i + 0], i945[i + 1], 2, i944, '')
  }
  i942.sharedMaterials = i944
  i942.receiveShadows = !!i943[4]
  i942.shadowCastingMode = i943[5]
  i942.sortingLayerID = i943[6]
  i942.sortingOrder = i943[7]
  i942.lightmapIndex = i943[8]
  i942.lightmapSceneIndex = i943[9]
  i942.lightmapScaleOffset = new pc.Vec4( i943[10], i943[11], i943[12], i943[13] )
  i942.lightProbeUsage = i943[14]
  i942.reflectionProbeUsage = i943[15]
  var i947 = i943[16]
  var i946 = []
  for(var i = 0; i < i947.length; i += 3) {
    i946.push( new pc.Vec3( i947[i + 0], i947[i + 1], i947[i + 2] ) );
  }
  i942.positions = i946
  i942.positionCount = i943[17]
  i942.time = i943[18]
  i942.startWidth = i943[19]
  i942.endWidth = i943[20]
  i942.widthMultiplier = i943[21]
  i942.autodestruct = !!i943[22]
  i942.emitting = !!i943[23]
  i942.numCornerVertices = i943[24]
  i942.numCapVertices = i943[25]
  i942.minVertexDistance = i943[26]
  i942.colorGradient = i943[27] ? new pc.ColorGradient(i943[27][0], i943[27][1], i943[27][2]) : null
  i942.startColor = new pc.Color(i943[28], i943[29], i943[30], i943[31])
  i942.endColor = new pc.Color(i943[32], i943[33], i943[34], i943[35])
  i942.generateLightingData = !!i943[36]
  i942.textureMode = i943[37]
  i942.alignment = i943[38]
  i942.widthCurve = new pc.AnimationCurve( { keys_flow: i943[39] } )
  return i942
}

Deserializers["Storelink"] = function (request, data, root) {
  var i950 = root || request.c( 'Storelink' )
  var i951 = data
  return i950
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Cubemap"] = function (request, data, root) {
  var i952 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Cubemap' )
  var i953 = data
  i952.name = i953[0]
  i952.atlasId = i953[1]
  i952.mipmapCount = i953[2]
  i952.hdr = !!i953[3]
  i952.size = i953[4]
  i952.anisoLevel = i953[5]
  i952.filterMode = i953[6]
  i952.wrapMode = i953[7]
  var i955 = i953[8]
  var i954 = []
  for(var i = 0; i < i955.length; i += 4) {
    i954.push( UnityEngine.Rect.MinMaxRect(i955[i + 0], i955[i + 1], i955[i + 2], i955[i + 3]) );
  }
  i952.rects = i954
  return i952
}

Deserializers["Luna.Unity.DTO.UnityEngine.Scene.Scene"] = function (request, data, root) {
  var i958 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Scene.Scene' )
  var i959 = data
  i958.name = i959[0]
  i958.index = i959[1]
  i958.startup = !!i959[2]
  return i958
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Camera"] = function (request, data, root) {
  var i960 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Camera' )
  var i961 = data
  i960.enabled = !!i961[0]
  i960.aspect = i961[1]
  i960.orthographic = !!i961[2]
  i960.orthographicSize = i961[3]
  i960.backgroundColor = new pc.Color(i961[4], i961[5], i961[6], i961[7])
  i960.nearClipPlane = i961[8]
  i960.farClipPlane = i961[9]
  i960.fieldOfView = i961[10]
  i960.depth = i961[11]
  i960.clearFlags = i961[12]
  i960.cullingMask = i961[13]
  i960.rect = i961[14]
  request.r(i961[15], i961[16], 0, i960, 'targetTexture')
  return i960
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.Light"] = function (request, data, root) {
  var i962 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.Light' )
  var i963 = data
  i962.enabled = !!i963[0]
  i962.type = i963[1]
  i962.color = new pc.Color(i963[2], i963[3], i963[4], i963[5])
  i962.cullingMask = i963[6]
  i962.intensity = i963[7]
  i962.range = i963[8]
  i962.spotAngle = i963[9]
  i962.shadows = i963[10]
  i962.shadowNormalBias = i963[11]
  i962.shadowBias = i963[12]
  i962.shadowStrength = i963[13]
  i962.lightmapBakeType = i963[14]
  i962.renderMode = i963[15]
  request.r(i963[16], i963[17], 0, i962, 'cookie')
  i962.cookieSize = i963[18]
  return i962
}

Deserializers["GameController"] = function (request, data, root) {
  var i964 = root || request.c( 'GameController' )
  var i965 = data
  var i967 = i965[0]
  var i966 = []
  for(var i = 0; i < i967.length; i += 2) {
  request.r(i967[i + 0], i967[i + 1], 2, i966, '')
  }
  i964.level = i966
  return i964
}

Deserializers["SoundManager"] = function (request, data, root) {
  var i968 = root || request.c( 'SoundManager' )
  var i969 = data
  request.r(i969[0], i969[1], 0, i968, 'Click_Audio')
  request.r(i969[2], i969[3], 0, i968, 'Win_Audio')
  request.r(i969[4], i969[5], 0, i968, 'Lose_Audio')
  request.r(i969[6], i969[7], 0, i968, 'MergePlayer_Audio')
  request.r(i969[8], i969[9], 0, i968, 'Runner_Audio')
  request.r(i969[10], i969[11], 0, i968, 'Die_Audio')
  request.r(i969[12], i969[13], 0, i968, 'NearAttack_Audio')
  request.r(i969[14], i969[15], 0, i968, 'FarAttack_Audio')
  request.r(i969[16], i969[17], 0, i968, 'GunShoot_Audio')
  request.r(i969[18], i969[19], 0, i968, 'BuyPlayer_Audio')
  request.r(i969[20], i969[21], 0, i968, 'MovePlayer_Audio')
  return i968
}

Deserializers["Luna.Unity.DTO.UnityEngine.Components.AudioSource"] = function (request, data, root) {
  var i970 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Components.AudioSource' )
  var i971 = data
  request.r(i971[0], i971[1], 0, i970, 'clip')
  request.r(i971[2], i971[3], 0, i970, 'outputAudioMixerGroup')
  i970.playOnAwake = !!i971[4]
  i970.loop = !!i971[5]
  i970.time = i971[6]
  i970.volume = i971[7]
  i970.pitch = i971[8]
  i970.enabled = !!i971[9]
  return i970
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings"] = function (request, data, root) {
  var i972 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings' )
  var i973 = data
  i972.ambientIntensity = i973[0]
  i972.reflectionIntensity = i973[1]
  i972.ambientMode = i973[2]
  i972.ambientLight = new pc.Color(i973[3], i973[4], i973[5], i973[6])
  i972.ambientSkyColor = new pc.Color(i973[7], i973[8], i973[9], i973[10])
  i972.ambientGroundColor = new pc.Color(i973[11], i973[12], i973[13], i973[14])
  i972.ambientEquatorColor = new pc.Color(i973[15], i973[16], i973[17], i973[18])
  i972.fogColor = new pc.Color(i973[19], i973[20], i973[21], i973[22])
  i972.fogEndDistance = i973[23]
  i972.fogStartDistance = i973[24]
  i972.fogDensity = i973[25]
  i972.fog = !!i973[26]
  request.r(i973[27], i973[28], 0, i972, 'skybox')
  i972.fogMode = i973[29]
  var i975 = i973[30]
  var i974 = []
  for(var i = 0; i < i975.length; i += 1) {
    i974.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap', i975[i + 0]) );
  }
  i972.lightmaps = i974
  i972.lightProbes = request.d('Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes', i973[31], i972.lightProbes)
  i972.lightmapsMode = i973[32]
  i972.environmentLightingMode = i973[33]
  i972.ambientProbe = new pc.SphericalHarmonicsL2(i973[34])
  request.r(i973[35], i973[36], 0, i972, 'customReflection')
  request.r(i973[37], i973[38], 0, i972, 'defaultReflection')
  i972.defaultReflectionMode = i973[39]
  i972.defaultReflectionResolution = i973[40]
  i972.sunLightObjectId = i973[41]
  i972.pixelLightCount = i973[42]
  i972.defaultReflectionHDR = !!i973[43]
  i972.hasLightDataAsset = !!i973[44]
  i972.hasManualGenerate = !!i973[45]
  return i972
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap"] = function (request, data, root) {
  var i978 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap' )
  var i979 = data
  request.r(i979[0], i979[1], 0, i978, 'lightmapColor')
  request.r(i979[2], i979[3], 0, i978, 'lightmapDirection')
  return i978
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes"] = function (request, data, root) {
  var i980 = root || new UnityEngine.LightProbes()
  var i981 = data
  return i980
}

Deserializers["TMPro.TMP_Settings"] = function (request, data, root) {
  var i986 = root || request.c( 'TMPro.TMP_Settings' )
  var i987 = data
  i986.m_enableWordWrapping = !!i987[0]
  i986.m_enableKerning = !!i987[1]
  i986.m_enableExtraPadding = !!i987[2]
  i986.m_enableTintAllSprites = !!i987[3]
  i986.m_enableParseEscapeCharacters = !!i987[4]
  i986.m_EnableRaycastTarget = !!i987[5]
  i986.m_GetFontFeaturesAtRuntime = !!i987[6]
  i986.m_missingGlyphCharacter = i987[7]
  i986.m_warningsDisabled = !!i987[8]
  request.r(i987[9], i987[10], 0, i986, 'm_defaultFontAsset')
  i986.m_defaultFontAssetPath = i987[11]
  i986.m_defaultFontSize = i987[12]
  i986.m_defaultAutoSizeMinRatio = i987[13]
  i986.m_defaultAutoSizeMaxRatio = i987[14]
  i986.m_defaultTextMeshProTextContainerSize = new pc.Vec2( i987[15], i987[16] )
  i986.m_defaultTextMeshProUITextContainerSize = new pc.Vec2( i987[17], i987[18] )
  i986.m_autoSizeTextContainer = !!i987[19]
  i986.m_IsTextObjectScaleStatic = !!i987[20]
  var i989 = i987[21]
  var i988 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i989.length; i += 2) {
  request.r(i989[i + 0], i989[i + 1], 1, i988, '')
  }
  i986.m_fallbackFontAssets = i988
  i986.m_matchMaterialPreset = !!i987[22]
  request.r(i987[23], i987[24], 0, i986, 'm_defaultSpriteAsset')
  i986.m_defaultSpriteAssetPath = i987[25]
  i986.m_enableEmojiSupport = !!i987[26]
  i986.m_MissingCharacterSpriteUnicode = i987[27]
  i986.m_defaultColorGradientPresetsPath = i987[28]
  request.r(i987[29], i987[30], 0, i986, 'm_defaultStyleSheet')
  i986.m_StyleSheetsResourcePath = i987[31]
  request.r(i987[32], i987[33], 0, i986, 'm_leadingCharacters')
  request.r(i987[34], i987[35], 0, i986, 'm_followingCharacters')
  i986.m_UseModernHangulLineBreakingRules = !!i987[36]
  return i986
}

Deserializers["TMPro.TMP_FontAsset"] = function (request, data, root) {
  var i992 = root || request.c( 'TMPro.TMP_FontAsset' )
  var i993 = data
  i992.hashCode = i993[0]
  request.r(i993[1], i993[2], 0, i992, 'material')
  i992.materialHashCode = i993[3]
  request.r(i993[4], i993[5], 0, i992, 'atlas')
  i992.normalStyle = i993[6]
  i992.normalSpacingOffset = i993[7]
  i992.boldStyle = i993[8]
  i992.boldSpacing = i993[9]
  i992.italicStyle = i993[10]
  i992.tabSize = i993[11]
  i992.m_Version = i993[12]
  i992.m_SourceFontFileGUID = i993[13]
  request.r(i993[14], i993[15], 0, i992, 'm_SourceFontFile_EditorRef')
  request.r(i993[16], i993[17], 0, i992, 'm_SourceFontFile')
  i992.m_AtlasPopulationMode = i993[18]
  i992.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i993[19], i992.m_FaceInfo)
  var i995 = i993[20]
  var i994 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.Glyph')))
  for(var i = 0; i < i995.length; i += 1) {
    i994.add(request.d('UnityEngine.TextCore.Glyph', i995[i + 0]));
  }
  i992.m_GlyphTable = i994
  var i997 = i993[21]
  var i996 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Character')))
  for(var i = 0; i < i997.length; i += 1) {
    i996.add(request.d('TMPro.TMP_Character', i997[i + 0]));
  }
  i992.m_CharacterTable = i996
  var i999 = i993[22]
  var i998 = []
  for(var i = 0; i < i999.length; i += 2) {
  request.r(i999[i + 0], i999[i + 1], 2, i998, '')
  }
  i992.m_AtlasTextures = i998
  i992.m_AtlasTextureIndex = i993[23]
  i992.m_IsMultiAtlasTexturesEnabled = !!i993[24]
  i992.m_ClearDynamicDataOnBuild = !!i993[25]
  var i1001 = i993[26]
  var i1000 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1001.length; i += 1) {
    i1000.add(request.d('UnityEngine.TextCore.GlyphRect', i1001[i + 0]));
  }
  i992.m_UsedGlyphRects = i1000
  var i1003 = i993[27]
  var i1002 = new (System.Collections.Generic.List$1(Bridge.ns('UnityEngine.TextCore.GlyphRect')))
  for(var i = 0; i < i1003.length; i += 1) {
    i1002.add(request.d('UnityEngine.TextCore.GlyphRect', i1003[i + 0]));
  }
  i992.m_FreeGlyphRects = i1002
  i992.m_fontInfo = request.d('TMPro.FaceInfo_Legacy', i993[28], i992.m_fontInfo)
  i992.m_AtlasWidth = i993[29]
  i992.m_AtlasHeight = i993[30]
  i992.m_AtlasPadding = i993[31]
  i992.m_AtlasRenderMode = i993[32]
  var i1005 = i993[33]
  var i1004 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Glyph')))
  for(var i = 0; i < i1005.length; i += 1) {
    i1004.add(request.d('TMPro.TMP_Glyph', i1005[i + 0]));
  }
  i992.m_glyphInfoList = i1004
  i992.m_KerningTable = request.d('TMPro.KerningTable', i993[34], i992.m_KerningTable)
  i992.m_FontFeatureTable = request.d('TMPro.TMP_FontFeatureTable', i993[35], i992.m_FontFeatureTable)
  var i1007 = i993[36]
  var i1006 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1007.length; i += 2) {
  request.r(i1007[i + 0], i1007[i + 1], 1, i1006, '')
  }
  i992.fallbackFontAssets = i1006
  var i1009 = i993[37]
  var i1008 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_FontAsset')))
  for(var i = 0; i < i1009.length; i += 2) {
  request.r(i1009[i + 0], i1009[i + 1], 1, i1008, '')
  }
  i992.m_FallbackFontAssetTable = i1008
  i992.m_CreationSettings = request.d('TMPro.FontAssetCreationSettings', i993[38], i992.m_CreationSettings)
  var i1011 = i993[39]
  var i1010 = []
  for(var i = 0; i < i1011.length; i += 1) {
    i1010.push( request.d('TMPro.TMP_FontWeightPair', i1011[i + 0]) );
  }
  i992.m_FontWeightTable = i1010
  var i1013 = i993[40]
  var i1012 = []
  for(var i = 0; i < i1013.length; i += 1) {
    i1012.push( request.d('TMPro.TMP_FontWeightPair', i1013[i + 0]) );
  }
  i992.fontWeights = i1012
  return i992
}

Deserializers["UnityEngine.TextCore.FaceInfo"] = function (request, data, root) {
  var i1014 = root || request.c( 'UnityEngine.TextCore.FaceInfo' )
  var i1015 = data
  i1014.m_FaceIndex = i1015[0]
  i1014.m_FamilyName = i1015[1]
  i1014.m_StyleName = i1015[2]
  i1014.m_PointSize = i1015[3]
  i1014.m_Scale = i1015[4]
  i1014.m_LineHeight = i1015[5]
  i1014.m_AscentLine = i1015[6]
  i1014.m_CapLine = i1015[7]
  i1014.m_MeanLine = i1015[8]
  i1014.m_Baseline = i1015[9]
  i1014.m_DescentLine = i1015[10]
  i1014.m_SuperscriptOffset = i1015[11]
  i1014.m_SuperscriptSize = i1015[12]
  i1014.m_SubscriptOffset = i1015[13]
  i1014.m_SubscriptSize = i1015[14]
  i1014.m_UnderlineOffset = i1015[15]
  i1014.m_UnderlineThickness = i1015[16]
  i1014.m_StrikethroughOffset = i1015[17]
  i1014.m_StrikethroughThickness = i1015[18]
  i1014.m_TabWidth = i1015[19]
  return i1014
}

Deserializers["UnityEngine.TextCore.Glyph"] = function (request, data, root) {
  var i1018 = root || request.c( 'UnityEngine.TextCore.Glyph' )
  var i1019 = data
  i1018.m_Index = i1019[0]
  i1018.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1019[1], i1018.m_Metrics)
  i1018.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1019[2], i1018.m_GlyphRect)
  i1018.m_Scale = i1019[3]
  i1018.m_AtlasIndex = i1019[4]
  return i1018
}

Deserializers["UnityEngine.TextCore.GlyphMetrics"] = function (request, data, root) {
  var i1020 = root || request.c( 'UnityEngine.TextCore.GlyphMetrics' )
  var i1021 = data
  i1020.m_Width = i1021[0]
  i1020.m_Height = i1021[1]
  i1020.m_HorizontalBearingX = i1021[2]
  i1020.m_HorizontalBearingY = i1021[3]
  i1020.m_HorizontalAdvance = i1021[4]
  return i1020
}

Deserializers["UnityEngine.TextCore.GlyphRect"] = function (request, data, root) {
  var i1022 = root || request.c( 'UnityEngine.TextCore.GlyphRect' )
  var i1023 = data
  i1022.m_X = i1023[0]
  i1022.m_Y = i1023[1]
  i1022.m_Width = i1023[2]
  i1022.m_Height = i1023[3]
  return i1022
}

Deserializers["TMPro.TMP_Character"] = function (request, data, root) {
  var i1026 = root || request.c( 'TMPro.TMP_Character' )
  var i1027 = data
  i1026.m_ElementType = i1027[0]
  i1026.m_Unicode = i1027[1]
  i1026.m_GlyphIndex = i1027[2]
  i1026.m_Scale = i1027[3]
  return i1026
}

Deserializers["TMPro.FaceInfo_Legacy"] = function (request, data, root) {
  var i1032 = root || request.c( 'TMPro.FaceInfo_Legacy' )
  var i1033 = data
  i1032.Name = i1033[0]
  i1032.PointSize = i1033[1]
  i1032.Scale = i1033[2]
  i1032.CharacterCount = i1033[3]
  i1032.LineHeight = i1033[4]
  i1032.Baseline = i1033[5]
  i1032.Ascender = i1033[6]
  i1032.CapHeight = i1033[7]
  i1032.Descender = i1033[8]
  i1032.CenterLine = i1033[9]
  i1032.SuperscriptOffset = i1033[10]
  i1032.SubscriptOffset = i1033[11]
  i1032.SubSize = i1033[12]
  i1032.Underline = i1033[13]
  i1032.UnderlineThickness = i1033[14]
  i1032.strikethrough = i1033[15]
  i1032.strikethroughThickness = i1033[16]
  i1032.TabWidth = i1033[17]
  i1032.Padding = i1033[18]
  i1032.AtlasWidth = i1033[19]
  i1032.AtlasHeight = i1033[20]
  return i1032
}

Deserializers["TMPro.TMP_Glyph"] = function (request, data, root) {
  var i1036 = root || request.c( 'TMPro.TMP_Glyph' )
  var i1037 = data
  i1036.id = i1037[0]
  i1036.x = i1037[1]
  i1036.y = i1037[2]
  i1036.width = i1037[3]
  i1036.height = i1037[4]
  i1036.xOffset = i1037[5]
  i1036.yOffset = i1037[6]
  i1036.xAdvance = i1037[7]
  i1036.scale = i1037[8]
  return i1036
}

Deserializers["TMPro.KerningTable"] = function (request, data, root) {
  var i1038 = root || request.c( 'TMPro.KerningTable' )
  var i1039 = data
  var i1041 = i1039[0]
  var i1040 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.KerningPair')))
  for(var i = 0; i < i1041.length; i += 1) {
    i1040.add(request.d('TMPro.KerningPair', i1041[i + 0]));
  }
  i1038.kerningPairs = i1040
  return i1038
}

Deserializers["TMPro.KerningPair"] = function (request, data, root) {
  var i1044 = root || request.c( 'TMPro.KerningPair' )
  var i1045 = data
  i1044.xOffset = i1045[0]
  i1044.m_FirstGlyph = i1045[1]
  i1044.m_FirstGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1045[2], i1044.m_FirstGlyphAdjustments)
  i1044.m_SecondGlyph = i1045[3]
  i1044.m_SecondGlyphAdjustments = request.d('TMPro.GlyphValueRecord_Legacy', i1045[4], i1044.m_SecondGlyphAdjustments)
  i1044.m_IgnoreSpacingAdjustments = !!i1045[5]
  return i1044
}

Deserializers["TMPro.TMP_FontFeatureTable"] = function (request, data, root) {
  var i1046 = root || request.c( 'TMPro.TMP_FontFeatureTable' )
  var i1047 = data
  var i1049 = i1047[0]
  var i1048 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_GlyphPairAdjustmentRecord')))
  for(var i = 0; i < i1049.length; i += 1) {
    i1048.add(request.d('TMPro.TMP_GlyphPairAdjustmentRecord', i1049[i + 0]));
  }
  i1046.m_GlyphPairAdjustmentRecords = i1048
  return i1046
}

Deserializers["TMPro.TMP_GlyphPairAdjustmentRecord"] = function (request, data, root) {
  var i1052 = root || request.c( 'TMPro.TMP_GlyphPairAdjustmentRecord' )
  var i1053 = data
  i1052.m_FirstAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1053[0], i1052.m_FirstAdjustmentRecord)
  i1052.m_SecondAdjustmentRecord = request.d('TMPro.TMP_GlyphAdjustmentRecord', i1053[1], i1052.m_SecondAdjustmentRecord)
  i1052.m_FeatureLookupFlags = i1053[2]
  return i1052
}

Deserializers["TMPro.TMP_GlyphAdjustmentRecord"] = function (request, data, root) {
  var i1054 = root || request.c( 'TMPro.TMP_GlyphAdjustmentRecord' )
  var i1055 = data
  i1054.m_GlyphIndex = i1055[0]
  i1054.m_GlyphValueRecord = request.d('TMPro.TMP_GlyphValueRecord', i1055[1], i1054.m_GlyphValueRecord)
  return i1054
}

Deserializers["TMPro.TMP_GlyphValueRecord"] = function (request, data, root) {
  var i1056 = root || request.c( 'TMPro.TMP_GlyphValueRecord' )
  var i1057 = data
  i1056.m_XPlacement = i1057[0]
  i1056.m_YPlacement = i1057[1]
  i1056.m_XAdvance = i1057[2]
  i1056.m_YAdvance = i1057[3]
  return i1056
}

Deserializers["TMPro.FontAssetCreationSettings"] = function (request, data, root) {
  var i1058 = root || request.c( 'TMPro.FontAssetCreationSettings' )
  var i1059 = data
  i1058.sourceFontFileName = i1059[0]
  i1058.sourceFontFileGUID = i1059[1]
  i1058.pointSizeSamplingMode = i1059[2]
  i1058.pointSize = i1059[3]
  i1058.padding = i1059[4]
  i1058.packingMode = i1059[5]
  i1058.atlasWidth = i1059[6]
  i1058.atlasHeight = i1059[7]
  i1058.characterSetSelectionMode = i1059[8]
  i1058.characterSequence = i1059[9]
  i1058.referencedFontAssetGUID = i1059[10]
  i1058.referencedTextAssetGUID = i1059[11]
  i1058.fontStyle = i1059[12]
  i1058.fontStyleModifier = i1059[13]
  i1058.renderMode = i1059[14]
  i1058.includeFontFeatures = !!i1059[15]
  return i1058
}

Deserializers["TMPro.TMP_FontWeightPair"] = function (request, data, root) {
  var i1062 = root || request.c( 'TMPro.TMP_FontWeightPair' )
  var i1063 = data
  request.r(i1063[0], i1063[1], 0, i1062, 'regularTypeface')
  request.r(i1063[2], i1063[3], 0, i1062, 'italicTypeface')
  return i1062
}

Deserializers["TMPro.TMP_SpriteAsset"] = function (request, data, root) {
  var i1064 = root || request.c( 'TMPro.TMP_SpriteAsset' )
  var i1065 = data
  i1064.hashCode = i1065[0]
  request.r(i1065[1], i1065[2], 0, i1064, 'material')
  i1064.materialHashCode = i1065[3]
  request.r(i1065[4], i1065[5], 0, i1064, 'spriteSheet')
  var i1067 = i1065[6]
  var i1066 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Sprite')))
  for(var i = 0; i < i1067.length; i += 1) {
    i1066.add(request.d('TMPro.TMP_Sprite', i1067[i + 0]));
  }
  i1064.spriteInfoList = i1066
  var i1069 = i1065[7]
  var i1068 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteAsset')))
  for(var i = 0; i < i1069.length; i += 2) {
  request.r(i1069[i + 0], i1069[i + 1], 1, i1068, '')
  }
  i1064.fallbackSpriteAssets = i1068
  i1064.m_Version = i1065[8]
  i1064.m_FaceInfo = request.d('UnityEngine.TextCore.FaceInfo', i1065[9], i1064.m_FaceInfo)
  var i1071 = i1065[10]
  var i1070 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteCharacter')))
  for(var i = 0; i < i1071.length; i += 1) {
    i1070.add(request.d('TMPro.TMP_SpriteCharacter', i1071[i + 0]));
  }
  i1064.m_SpriteCharacterTable = i1070
  var i1073 = i1065[11]
  var i1072 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_SpriteGlyph')))
  for(var i = 0; i < i1073.length; i += 1) {
    i1072.add(request.d('TMPro.TMP_SpriteGlyph', i1073[i + 0]));
  }
  i1064.m_SpriteGlyphTable = i1072
  return i1064
}

Deserializers["TMPro.TMP_Sprite"] = function (request, data, root) {
  var i1076 = root || request.c( 'TMPro.TMP_Sprite' )
  var i1077 = data
  i1076.name = i1077[0]
  i1076.hashCode = i1077[1]
  i1076.unicode = i1077[2]
  i1076.pivot = new pc.Vec2( i1077[3], i1077[4] )
  request.r(i1077[5], i1077[6], 0, i1076, 'sprite')
  i1076.id = i1077[7]
  i1076.x = i1077[8]
  i1076.y = i1077[9]
  i1076.width = i1077[10]
  i1076.height = i1077[11]
  i1076.xOffset = i1077[12]
  i1076.yOffset = i1077[13]
  i1076.xAdvance = i1077[14]
  i1076.scale = i1077[15]
  return i1076
}

Deserializers["TMPro.TMP_SpriteCharacter"] = function (request, data, root) {
  var i1082 = root || request.c( 'TMPro.TMP_SpriteCharacter' )
  var i1083 = data
  i1082.m_Name = i1083[0]
  i1082.m_HashCode = i1083[1]
  i1082.m_ElementType = i1083[2]
  i1082.m_Unicode = i1083[3]
  i1082.m_GlyphIndex = i1083[4]
  i1082.m_Scale = i1083[5]
  return i1082
}

Deserializers["TMPro.TMP_SpriteGlyph"] = function (request, data, root) {
  var i1086 = root || request.c( 'TMPro.TMP_SpriteGlyph' )
  var i1087 = data
  request.r(i1087[0], i1087[1], 0, i1086, 'sprite')
  i1086.m_Index = i1087[2]
  i1086.m_Metrics = request.d('UnityEngine.TextCore.GlyphMetrics', i1087[3], i1086.m_Metrics)
  i1086.m_GlyphRect = request.d('UnityEngine.TextCore.GlyphRect', i1087[4], i1086.m_GlyphRect)
  i1086.m_Scale = i1087[5]
  i1086.m_AtlasIndex = i1087[6]
  return i1086
}

Deserializers["TMPro.TMP_StyleSheet"] = function (request, data, root) {
  var i1088 = root || request.c( 'TMPro.TMP_StyleSheet' )
  var i1089 = data
  var i1091 = i1089[0]
  var i1090 = new (System.Collections.Generic.List$1(Bridge.ns('TMPro.TMP_Style')))
  for(var i = 0; i < i1091.length; i += 1) {
    i1090.add(request.d('TMPro.TMP_Style', i1091[i + 0]));
  }
  i1088.m_StyleList = i1090
  return i1088
}

Deserializers["TMPro.TMP_Style"] = function (request, data, root) {
  var i1094 = root || request.c( 'TMPro.TMP_Style' )
  var i1095 = data
  i1094.m_Name = i1095[0]
  i1094.m_HashCode = i1095[1]
  i1094.m_OpeningDefinition = i1095[2]
  i1094.m_ClosingDefinition = i1095[3]
  i1094.m_OpeningTagArray = i1095[4]
  i1094.m_ClosingTagArray = i1095[5]
  i1094.m_OpeningTagUnicodeArray = i1095[6]
  i1094.m_ClosingTagUnicodeArray = i1095[7]
  return i1094
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader"] = function (request, data, root) {
  var i1096 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader' )
  var i1097 = data
  var i1099 = i1097[0]
  var i1098 = new (System.Collections.Generic.List$1(Bridge.ns('System.String')))
  for(var i = 0; i < i1099.length; i += 1) {
    i1098.add(i1099[i + 0]);
  }
  i1096.invalidShaderVariants = i1098
  i1096.name = i1097[1]
  i1096.guid = i1097[2]
  var i1101 = i1097[3]
  var i1100 = []
  for(var i = 0; i < i1101.length; i += 1) {
    i1100.push( i1101[i + 0] );
  }
  i1096.shaderDefinedKeywords = i1100
  var i1103 = i1097[4]
  var i1102 = []
  for(var i = 0; i < i1103.length; i += 1) {
    i1102.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass', i1103[i + 0]) );
  }
  i1096.passes = i1102
  var i1105 = i1097[5]
  var i1104 = []
  for(var i = 0; i < i1105.length; i += 1) {
    i1104.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass', i1105[i + 0]) );
  }
  i1096.usePasses = i1104
  var i1107 = i1097[6]
  var i1106 = []
  for(var i = 0; i < i1107.length; i += 1) {
    i1106.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue', i1107[i + 0]) );
  }
  i1096.defaultParameterValues = i1106
  request.r(i1097[7], i1097[8], 0, i1096, 'unityFallbackShader')
  i1096.readDepth = !!i1097[9]
  i1096.isCreatedByShaderGraph = !!i1097[10]
  return i1096
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass"] = function (request, data, root) {
  var i1114 = root || new pc.UnityShaderPass()
  var i1115 = data
  i1114.id = i1115[0]
  i1114.subShaderIndex = i1115[1]
  i1114.name = i1115[2]
  i1114.passType = i1115[3]
  i1114.usePass = !!i1115[4]
  i1114.zTest = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[5], i1114.zTest)
  i1114.zWrite = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[6], i1114.zWrite)
  i1114.culling = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[7], i1114.culling)
  i1114.blending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1115[8], i1114.blending)
  i1114.alphaBlending = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending', i1115[9], i1114.alphaBlending)
  i1114.colorWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[10], i1114.colorWriteMask)
  i1114.offsetUnits = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[11], i1114.offsetUnits)
  i1114.offsetFactor = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[12], i1114.offsetFactor)
  i1114.stencilRef = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[13], i1114.stencilRef)
  i1114.stencilReadMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[14], i1114.stencilReadMask)
  i1114.stencilWriteMask = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1115[15], i1114.stencilWriteMask)
  i1114.stencilOp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1115[16], i1114.stencilOp)
  i1114.stencilOpFront = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1115[17], i1114.stencilOpFront)
  i1114.stencilOpBack = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp', i1115[18], i1114.stencilOpBack)
  var i1117 = i1115[19]
  var i1116 = []
  for(var i = 0; i < i1117.length; i += 1) {
    i1116.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag', i1117[i + 0]) );
  }
  i1114.tags = i1116
  var i1119 = i1115[20]
  var i1118 = []
  for(var i = 0; i < i1119.length; i += 1) {
    i1118.push( i1119[i + 0] );
  }
  i1114.passDefinedKeywords = i1118
  var i1121 = i1115[21]
  var i1120 = []
  for(var i = 0; i < i1121.length; i += 1) {
    i1120.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1121[i + 0]) );
  }
  i1114.variants = i1120
  var i1123 = i1115[22]
  var i1122 = []
  for(var i = 0; i < i1123.length; i += 1) {
    i1122.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant', i1123[i + 0]) );
  }
  i1114.excludedVariants = i1122
  i1114.hasDepthReader = !!i1115[23]
  return i1114
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value"] = function (request, data, root) {
  var i1124 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value' )
  var i1125 = data
  i1124.val = i1125[0]
  i1124.name = i1125[1]
  return i1124
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending"] = function (request, data, root) {
  var i1126 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending' )
  var i1127 = data
  i1126.src = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[0], i1126.src)
  i1126.dst = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[1], i1126.dst)
  i1126.op = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1127[2], i1126.op)
  return i1126
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp"] = function (request, data, root) {
  var i1128 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp' )
  var i1129 = data
  i1128.pass = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[0], i1128.pass)
  i1128.fail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[1], i1128.fail)
  i1128.zFail = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[2], i1128.zFail)
  i1128.comp = request.d('Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value', i1129[3], i1128.comp)
  return i1128
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag"] = function (request, data, root) {
  var i1132 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag' )
  var i1133 = data
  i1132.name = i1133[0]
  i1132.value = i1133[1]
  return i1132
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant"] = function (request, data, root) {
  var i1136 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant' )
  var i1137 = data
  i1136.passId = i1137[0]
  i1136.subShaderIndex = i1137[1]
  var i1139 = i1137[2]
  var i1138 = []
  for(var i = 0; i < i1139.length; i += 1) {
    i1138.push( i1139[i + 0] );
  }
  i1136.keywords = i1138
  i1136.vertexProgram = i1137[3]
  i1136.fragmentProgram = i1137[4]
  i1136.readDepth = !!i1137[5]
  return i1136
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass"] = function (request, data, root) {
  var i1142 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass' )
  var i1143 = data
  request.r(i1143[0], i1143[1], 0, i1142, 'shader')
  i1142.pass = i1143[2]
  return i1142
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue"] = function (request, data, root) {
  var i1146 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue' )
  var i1147 = data
  i1146.name = i1147[0]
  i1146.type = i1147[1]
  i1146.value = new pc.Vec4( i1147[2], i1147[3], i1147[4], i1147[5] )
  i1146.textureValue = i1147[6]
  return i1146
}

Deserializers["Luna.Unity.DTO.UnityEngine.Textures.Sprite"] = function (request, data, root) {
  var i1148 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Textures.Sprite' )
  var i1149 = data
  i1148.name = i1149[0]
  request.r(i1149[1], i1149[2], 0, i1148, 'texture')
  i1148.aabb = i1149[3]
  i1148.vertices = i1149[4]
  i1148.triangles = i1149[5]
  i1148.textureRect = UnityEngine.Rect.MinMaxRect(i1149[6], i1149[7], i1149[8], i1149[9])
  i1148.packedRect = UnityEngine.Rect.MinMaxRect(i1149[10], i1149[11], i1149[12], i1149[13])
  i1148.border = new pc.Vec4( i1149[14], i1149[15], i1149[16], i1149[17] )
  i1148.transparency = i1149[18]
  i1148.bounds = i1149[19]
  i1148.pixelsPerUnit = i1149[20]
  i1148.textureWidth = i1149[21]
  i1148.textureHeight = i1149[22]
  i1148.nativeSize = new pc.Vec2( i1149[23], i1149[24] )
  i1148.pivot = new pc.Vec2( i1149[25], i1149[26] )
  i1148.textureRectOffset = new pc.Vec2( i1149[27], i1149[28] )
  return i1148
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.AudioClip"] = function (request, data, root) {
  var i1150 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.AudioClip' )
  var i1151 = data
  i1150.name = i1151[0]
  return i1150
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip"] = function (request, data, root) {
  var i1152 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip' )
  var i1153 = data
  i1152.name = i1153[0]
  i1152.wrapMode = i1153[1]
  i1152.isLooping = !!i1153[2]
  i1152.length = i1153[3]
  var i1155 = i1153[4]
  var i1154 = []
  for(var i = 0; i < i1155.length; i += 1) {
    i1154.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve', i1155[i + 0]) );
  }
  i1152.curves = i1154
  var i1157 = i1153[5]
  var i1156 = []
  for(var i = 0; i < i1157.length; i += 1) {
    i1156.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent', i1157[i + 0]) );
  }
  i1152.events = i1156
  i1152.halfPrecision = !!i1153[6]
  return i1152
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve"] = function (request, data, root) {
  var i1160 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve' )
  var i1161 = data
  i1160.path = i1161[0]
  i1160.componentType = i1161[1]
  i1160.property = i1161[2]
  i1160.keys = i1161[3]
  var i1163 = i1161[4]
  var i1162 = []
  for(var i = 0; i < i1163.length; i += 1) {
    i1162.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey', i1163[i + 0]) );
  }
  i1160.objectReferenceKeys = i1162
  return i1160
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey"] = function (request, data, root) {
  var i1166 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey' )
  var i1167 = data
  i1166.time = i1167[0]
  request.r(i1167[1], i1167[2], 0, i1166, 'value')
  return i1166
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent"] = function (request, data, root) {
  var i1170 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent' )
  var i1171 = data
  i1170.functionName = i1171[0]
  i1170.floatParameter = i1171[1]
  i1170.intParameter = i1171[2]
  i1170.stringParameter = i1171[3]
  request.r(i1171[4], i1171[5], 0, i1170, 'objectReferenceParameter')
  i1170.time = i1171[6]
  return i1170
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font"] = function (request, data, root) {
  var i1172 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font' )
  var i1173 = data
  i1172.name = i1173[0]
  i1172.ascent = i1173[1]
  i1172.originalLineHeight = i1173[2]
  i1172.fontSize = i1173[3]
  var i1175 = i1173[4]
  var i1174 = []
  for(var i = 0; i < i1175.length; i += 1) {
    i1174.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo', i1175[i + 0]) );
  }
  i1172.characterInfo = i1174
  request.r(i1173[5], i1173[6], 0, i1172, 'texture')
  i1172.originalFontSize = i1173[7]
  return i1172
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo"] = function (request, data, root) {
  var i1178 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo' )
  var i1179 = data
  i1178.index = i1179[0]
  i1178.advance = i1179[1]
  i1178.bearing = i1179[2]
  i1178.glyphWidth = i1179[3]
  i1178.glyphHeight = i1179[4]
  i1178.minX = i1179[5]
  i1178.maxX = i1179[6]
  i1178.minY = i1179[7]
  i1178.maxY = i1179[8]
  i1178.uvBottomLeftX = i1179[9]
  i1178.uvBottomLeftY = i1179[10]
  i1178.uvBottomRightX = i1179[11]
  i1178.uvBottomRightY = i1179[12]
  i1178.uvTopLeftX = i1179[13]
  i1178.uvTopLeftY = i1179[14]
  i1178.uvTopRightX = i1179[15]
  i1178.uvTopRightY = i1179[16]
  return i1178
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController"] = function (request, data, root) {
  var i1180 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController' )
  var i1181 = data
  i1180.name = i1181[0]
  var i1183 = i1181[1]
  var i1182 = []
  for(var i = 0; i < i1183.length; i += 1) {
    i1182.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState', i1183[i + 0]) );
  }
  i1180.states = i1182
  var i1185 = i1181[2]
  var i1184 = []
  for(var i = 0; i < i1185.length; i += 1) {
    i1184.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer', i1185[i + 0]) );
  }
  i1180.layers = i1184
  var i1187 = i1181[3]
  var i1186 = []
  for(var i = 0; i < i1187.length; i += 1) {
    i1186.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter', i1187[i + 0]) );
  }
  i1180.parameters = i1186
  var i1189 = i1181[4]
  var i1188 = []
  for(var i = 0; i < i1189.length; i += 1) {
    i1188.push( i1189[i + 0] );
  }
  i1180.animationClips = i1188
  return i1180
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState"] = function (request, data, root) {
  var i1192 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState' )
  var i1193 = data
  i1192.cycleOffset = i1193[0]
  i1192.cycleOffsetParameter = i1193[1]
  i1192.cycleOffsetParameterActive = !!i1193[2]
  i1192.mirror = !!i1193[3]
  i1192.mirrorParameter = i1193[4]
  i1192.mirrorParameterActive = !!i1193[5]
  i1192.motionId = i1193[6]
  i1192.nameHash = i1193[7]
  i1192.fullPathHash = i1193[8]
  i1192.speed = i1193[9]
  i1192.speedParameter = i1193[10]
  i1192.speedParameterActive = !!i1193[11]
  i1192.tag = i1193[12]
  i1192.name = i1193[13]
  i1192.writeDefaultValues = !!i1193[14]
  var i1195 = i1193[15]
  var i1194 = []
  for(var i = 0; i < i1195.length; i += 1) {
    i1194.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1195[i + 0]) );
  }
  i1192.transitions = i1194
  var i1197 = i1193[16]
  var i1196 = []
  for(var i = 0; i < i1197.length; i += 2) {
  request.r(i1197[i + 0], i1197[i + 1], 2, i1196, '')
  }
  i1192.behaviours = i1196
  return i1192
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition"] = function (request, data, root) {
  var i1200 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition' )
  var i1201 = data
  i1200.fullPath = i1201[0]
  i1200.canTransitionToSelf = !!i1201[1]
  i1200.duration = i1201[2]
  i1200.exitTime = i1201[3]
  i1200.hasExitTime = !!i1201[4]
  i1200.hasFixedDuration = !!i1201[5]
  i1200.interruptionSource = i1201[6]
  i1200.offset = i1201[7]
  i1200.orderedInterruption = !!i1201[8]
  i1200.destinationStateNameHash = i1201[9]
  i1200.destinationStateMachineId = i1201[10]
  i1200.isExit = !!i1201[11]
  i1200.mute = !!i1201[12]
  i1200.solo = !!i1201[13]
  var i1203 = i1201[14]
  var i1202 = []
  for(var i = 0; i < i1203.length; i += 1) {
    i1202.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1203[i + 0]) );
  }
  i1200.conditions = i1202
  return i1200
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition"] = function (request, data, root) {
  var i1206 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition' )
  var i1207 = data
  i1206.mode = i1207[0]
  i1206.parameter = i1207[1]
  i1206.threshold = i1207[2]
  return i1206
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer"] = function (request, data, root) {
  var i1212 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer' )
  var i1213 = data
  i1212.blendingMode = i1213[0]
  i1212.defaultWeight = i1213[1]
  i1212.name = i1213[2]
  i1212.stateMachine = request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine', i1213[3], i1212.stateMachine)
  return i1212
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine"] = function (request, data, root) {
  var i1214 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine' )
  var i1215 = data
  i1214.id = i1215[0]
  i1214.defaultStateNameHash = i1215[1]
  var i1217 = i1215[2]
  var i1216 = []
  for(var i = 0; i < i1217.length; i += 1) {
    i1216.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition', i1217[i + 0]) );
  }
  i1214.entryTransitions = i1216
  var i1219 = i1215[3]
  var i1218 = []
  for(var i = 0; i < i1219.length; i += 1) {
    i1218.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition', i1219[i + 0]) );
  }
  i1214.anyStateTransitions = i1218
  return i1214
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition"] = function (request, data, root) {
  var i1222 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition' )
  var i1223 = data
  i1222.destinationStateNameHash = i1223[0]
  i1222.destinationStateMachineId = i1223[1]
  i1222.isExit = !!i1223[2]
  i1222.mute = !!i1223[3]
  i1222.solo = !!i1223[4]
  var i1225 = i1223[5]
  var i1224 = []
  for(var i = 0; i < i1225.length; i += 1) {
    i1224.push( request.d('Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition', i1225[i + 0]) );
  }
  i1222.conditions = i1224
  return i1222
}

Deserializers["Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter"] = function (request, data, root) {
  var i1228 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter' )
  var i1229 = data
  i1228.defaultBool = !!i1229[0]
  i1228.defaultFloat = i1229[1]
  i1228.defaultInt = i1229[2]
  i1228.name = i1229[3]
  i1228.nameHash = i1229[4]
  i1228.type = i1229[5]
  return i1228
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.TextAsset"] = function (request, data, root) {
  var i1230 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.TextAsset' )
  var i1231 = data
  i1230.name = i1231[0]
  i1230.bytes64 = i1231[1]
  i1230.data = i1231[2]
  return i1230
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources"] = function (request, data, root) {
  var i1232 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources' )
  var i1233 = data
  var i1235 = i1233[0]
  var i1234 = []
  for(var i = 0; i < i1235.length; i += 1) {
    i1234.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.Resources+File', i1235[i + 0]) );
  }
  i1232.files = i1234
  i1232.componentToPrefabIds = i1233[1]
  return i1232
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Resources+File"] = function (request, data, root) {
  var i1238 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Resources+File' )
  var i1239 = data
  i1238.path = i1239[0]
  request.r(i1239[1], i1239[2], 0, i1238, 'unityObject')
  return i1238
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings"] = function (request, data, root) {
  var i1240 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings' )
  var i1241 = data
  var i1243 = i1241[0]
  var i1242 = []
  for(var i = 0; i < i1243.length; i += 1) {
    i1242.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder', i1243[i + 0]) );
  }
  i1240.scriptsExecutionOrder = i1242
  var i1245 = i1241[1]
  var i1244 = []
  for(var i = 0; i < i1245.length; i += 1) {
    i1244.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer', i1245[i + 0]) );
  }
  i1240.sortingLayers = i1244
  var i1247 = i1241[2]
  var i1246 = []
  for(var i = 0; i < i1247.length; i += 1) {
    i1246.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer', i1247[i + 0]) );
  }
  i1240.cullingLayers = i1246
  i1240.timeSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings', i1241[3], i1240.timeSettings)
  i1240.physicsSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings', i1241[4], i1240.physicsSettings)
  i1240.physics2DSettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings', i1241[5], i1240.physics2DSettings)
  i1240.qualitySettings = request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1241[6], i1240.qualitySettings)
  i1240.removeShadows = !!i1241[7]
  i1240.autoInstantiatePrefabs = !!i1241[8]
  i1240.enableAutoInstancing = !!i1241[9]
  i1240.lightmapEncodingQuality = i1241[10]
  i1240.desiredColorSpace = i1241[11]
  return i1240
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder"] = function (request, data, root) {
  var i1250 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder' )
  var i1251 = data
  i1250.name = i1251[0]
  i1250.value = i1251[1]
  return i1250
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer"] = function (request, data, root) {
  var i1254 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer' )
  var i1255 = data
  i1254.id = i1255[0]
  i1254.name = i1255[1]
  i1254.value = i1255[2]
  return i1254
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer"] = function (request, data, root) {
  var i1258 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer' )
  var i1259 = data
  i1258.id = i1259[0]
  i1258.name = i1259[1]
  return i1258
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings"] = function (request, data, root) {
  var i1260 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings' )
  var i1261 = data
  i1260.fixedDeltaTime = i1261[0]
  i1260.maximumDeltaTime = i1261[1]
  i1260.timeScale = i1261[2]
  i1260.maximumParticleTimestep = i1261[3]
  return i1260
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings"] = function (request, data, root) {
  var i1262 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings' )
  var i1263 = data
  i1262.gravity = new pc.Vec3( i1263[0], i1263[1], i1263[2] )
  i1262.defaultSolverIterations = i1263[3]
  i1262.bounceThreshold = i1263[4]
  i1262.autoSyncTransforms = !!i1263[5]
  i1262.autoSimulation = !!i1263[6]
  var i1265 = i1263[7]
  var i1264 = []
  for(var i = 0; i < i1265.length; i += 1) {
    i1264.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask', i1265[i + 0]) );
  }
  i1262.collisionMatrix = i1264
  return i1262
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask"] = function (request, data, root) {
  var i1268 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask' )
  var i1269 = data
  i1268.enabled = !!i1269[0]
  i1268.layerId = i1269[1]
  i1268.otherLayerId = i1269[2]
  return i1268
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings"] = function (request, data, root) {
  var i1270 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings' )
  var i1271 = data
  request.r(i1271[0], i1271[1], 0, i1270, 'material')
  i1270.gravity = new pc.Vec2( i1271[2], i1271[3] )
  i1270.positionIterations = i1271[4]
  i1270.velocityIterations = i1271[5]
  i1270.velocityThreshold = i1271[6]
  i1270.maxLinearCorrection = i1271[7]
  i1270.maxAngularCorrection = i1271[8]
  i1270.maxTranslationSpeed = i1271[9]
  i1270.maxRotationSpeed = i1271[10]
  i1270.timeToSleep = i1271[11]
  i1270.linearSleepTolerance = i1271[12]
  i1270.angularSleepTolerance = i1271[13]
  i1270.defaultContactOffset = i1271[14]
  i1270.autoSimulation = !!i1271[15]
  i1270.queriesHitTriggers = !!i1271[16]
  i1270.queriesStartInColliders = !!i1271[17]
  i1270.callbacksOnDisable = !!i1271[18]
  i1270.reuseCollisionCallbacks = !!i1271[19]
  i1270.autoSyncTransforms = !!i1271[20]
  var i1273 = i1271[21]
  var i1272 = []
  for(var i = 0; i < i1273.length; i += 1) {
    i1272.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask', i1273[i + 0]) );
  }
  i1270.collisionMatrix = i1272
  return i1270
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask"] = function (request, data, root) {
  var i1276 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask' )
  var i1277 = data
  i1276.enabled = !!i1277[0]
  i1276.layerId = i1277[1]
  i1276.otherLayerId = i1277[2]
  return i1276
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.QualitySettings"] = function (request, data, root) {
  var i1278 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.QualitySettings' )
  var i1279 = data
  var i1281 = i1279[0]
  var i1280 = []
  for(var i = 0; i < i1281.length; i += 1) {
    i1280.push( request.d('Luna.Unity.DTO.UnityEngine.Assets.QualitySettings', i1281[i + 0]) );
  }
  i1278.qualityLevels = i1280
  var i1283 = i1279[1]
  var i1282 = []
  for(var i = 0; i < i1283.length; i += 1) {
    i1282.push( i1283[i + 0] );
  }
  i1278.names = i1282
  i1278.shadows = i1279[2]
  i1278.anisotropicFiltering = i1279[3]
  i1278.antiAliasing = i1279[4]
  i1278.lodBias = i1279[5]
  i1278.shadowCascades = i1279[6]
  i1278.shadowDistance = i1279[7]
  i1278.shadowmaskMode = i1279[8]
  i1278.shadowProjection = i1279[9]
  i1278.shadowResolution = i1279[10]
  i1278.softParticles = !!i1279[11]
  i1278.softVegetation = !!i1279[12]
  i1278.activeColorSpace = i1279[13]
  i1278.desiredColorSpace = i1279[14]
  i1278.masterTextureLimit = i1279[15]
  i1278.maxQueuedFrames = i1279[16]
  i1278.particleRaycastBudget = i1279[17]
  i1278.pixelLightCount = i1279[18]
  i1278.realtimeReflectionProbes = !!i1279[19]
  i1278.shadowCascade2Split = i1279[20]
  i1278.shadowCascade4Split = new pc.Vec3( i1279[21], i1279[22], i1279[23] )
  i1278.streamingMipmapsActive = !!i1279[24]
  i1278.vSyncCount = i1279[25]
  i1278.asyncUploadBufferSize = i1279[26]
  i1278.asyncUploadTimeSlice = i1279[27]
  i1278.billboardsFaceCameraPosition = !!i1279[28]
  i1278.shadowNearPlaneOffset = i1279[29]
  i1278.streamingMipmapsMemoryBudget = i1279[30]
  i1278.maximumLODLevel = i1279[31]
  i1278.streamingMipmapsAddAllCameras = !!i1279[32]
  i1278.streamingMipmapsMaxLevelReduction = i1279[33]
  i1278.streamingMipmapsRenderersPerFrame = i1279[34]
  i1278.resolutionScalingFixedDPIFactor = i1279[35]
  i1278.streamingMipmapsMaxFileIORequests = i1279[36]
  i1278.currentQualityLevel = i1279[37]
  return i1278
}

Deserializers["Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame"] = function (request, data, root) {
  var i1288 = root || request.c( 'Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame' )
  var i1289 = data
  i1288.weight = i1289[0]
  i1288.vertices = i1289[1]
  i1288.normals = i1289[2]
  i1288.tangents = i1289[3]
  return i1288
}

Deserializers["TMPro.GlyphValueRecord_Legacy"] = function (request, data, root) {
  var i1290 = root || request.c( 'TMPro.GlyphValueRecord_Legacy' )
  var i1291 = data
  i1290.xPlacement = i1291[0]
  i1290.yPlacement = i1291[1]
  i1290.xAdvance = i1291[2]
  i1290.yAdvance = i1291[3]
  return i1290
}

Deserializers.fields = {"Luna.Unity.DTO.UnityEngine.Assets.Material":{"name":0,"shader":1,"renderQueue":3,"enableInstancing":4,"floatParameters":5,"colorParameters":6,"vectorParameters":7,"textureParameters":8,"materialFlags":9},"Luna.Unity.DTO.UnityEngine.Assets.Material+FloatParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+ColorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+VectorParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+TextureParameter":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Material+MaterialFlag":{"name":0,"enabled":1},"Luna.Unity.DTO.UnityEngine.Components.Transform":{"position":0,"scale":3,"rotation":6},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystem":{"main":0,"colorBySpeed":1,"colorOverLifetime":2,"emission":3,"rotationBySpeed":4,"rotationOverLifetime":5,"shape":6,"sizeBySpeed":7,"sizeOverLifetime":8,"textureSheetAnimation":9,"velocityOverLifetime":10,"noise":11,"inheritVelocity":12,"forceOverLifetime":13,"limitVelocityOverLifetime":14,"useAutoRandomSeed":15,"randomSeed":16},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.MainModule":{"duration":0,"loop":1,"prewarm":2,"startDelay":3,"startLifetime":4,"startSpeed":5,"startSize3D":6,"startSizeX":7,"startSizeY":8,"startSizeZ":9,"startRotation3D":10,"startRotationX":11,"startRotationY":12,"startRotationZ":13,"startColor":14,"gravityModifier":15,"simulationSpace":16,"customSimulationSpace":17,"simulationSpeed":19,"useUnscaledTime":20,"scalingMode":21,"playOnAwake":22,"maxParticles":23,"emitterVelocityMode":24,"stopAction":25},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxCurve":{"mode":0,"curveMin":1,"curveMax":2,"curveMultiplier":3,"constantMin":4,"constantMax":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.MinMaxGradient":{"mode":0,"gradientMin":1,"gradientMax":2,"colorMin":3,"colorMax":7},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Gradient":{"mode":0,"colorKeys":1,"alphaKeys":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientColorKey":{"color":0,"time":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Data.GradientAlphaKey":{"alpha":0,"time":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorBySpeedModule":{"enabled":0,"color":1,"range":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ColorOverLifetimeModule":{"enabled":0,"color":1},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.EmissionModule":{"enabled":0,"rateOverTime":1,"rateOverDistance":2,"bursts":3},"Luna.Unity.DTO.UnityEngine.ParticleSystemTypes.Burst":{"count":0,"cycleCount":1,"minCount":2,"maxCount":3,"repeatInterval":4,"time":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.RotationOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ShapeModule":{"enabled":0,"shapeType":1,"randomDirectionAmount":2,"sphericalDirectionAmount":3,"randomPositionAmount":4,"alignToDirection":5,"radius":6,"radiusMode":7,"radiusSpread":8,"radiusSpeed":9,"radiusThickness":10,"angle":11,"length":12,"boxThickness":13,"meshShapeType":16,"mesh":17,"meshRenderer":19,"skinnedMeshRenderer":21,"useMeshMaterialIndex":23,"meshMaterialIndex":24,"useMeshColors":25,"normalOffset":26,"arc":27,"arcMode":28,"arcSpread":29,"arcSpeed":30,"donutRadius":31,"position":32,"rotation":35,"scale":38},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeBySpeedModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4,"range":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.SizeOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"separateAxes":4},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.TextureSheetAnimationModule":{"enabled":0,"mode":1,"animation":2,"numTilesX":3,"numTilesY":4,"useRandomRow":5,"frameOverTime":6,"startFrame":7,"cycleCount":8,"rowIndex":9,"flipU":10,"flipV":11,"spriteCount":12,"sprites":13},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.VelocityOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"speedModifier":4,"space":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.NoiseModule":{"enabled":0,"separateAxes":1,"strengthX":2,"strengthY":3,"strengthZ":4,"frequency":5,"damping":6,"octaveCount":7,"octaveMultiplier":8,"octaveScale":9,"quality":10,"scrollSpeed":11,"scrollSpeedMultiplier":12,"remapEnabled":13,"remapX":14,"remapY":15,"remapZ":16,"positionAmount":17,"rotationAmount":18,"sizeAmount":19},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.InheritVelocityModule":{"enabled":0,"mode":1,"curve":2},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.ForceOverLifetimeModule":{"enabled":0,"x":1,"y":2,"z":3,"space":4,"randomized":5},"Luna.Unity.DTO.UnityEngine.ParticleSystemModules.LimitVelocityOverLifetimeModule":{"enabled":0,"limitX":1,"limitY":2,"limitZ":3,"dampen":4,"separateAxes":5,"space":6,"drag":7,"multiplyDragByParticleSize":8,"multiplyDragByParticleVelocity":9},"Luna.Unity.DTO.UnityEngine.Components.ParticleSystemRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"mesh":16,"meshCount":18,"activeVertexStreamsCount":19,"alignment":20,"renderMode":21,"sortMode":22,"lengthScale":23,"velocityScale":24,"cameraVelocityScale":25,"normalDirection":26,"sortingFudge":27,"minParticleSize":28,"maxParticleSize":29,"pivot":30,"trailMaterial":33},"Luna.Unity.DTO.UnityEngine.Scene.GameObject":{"name":0,"tag":1,"enabled":2,"isStatic":3,"layer":4},"Luna.Unity.DTO.UnityEngine.Components.MeshFilter":{"sharedMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshRenderer":{"additionalVertexStreams":0,"enabled":2,"sharedMaterial":3,"sharedMaterials":5,"receiveShadows":6,"shadowCastingMode":7,"sortingLayerID":8,"sortingOrder":9,"lightmapIndex":10,"lightmapSceneIndex":11,"lightmapScaleOffset":12,"lightProbeUsage":16,"reflectionProbeUsage":17},"Luna.Unity.DTO.UnityEngine.Components.BoxCollider":{"center":0,"size":3,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Components.Rigidbody":{"mass":0,"drag":1,"angularDrag":2,"useGravity":3,"isKinematic":4,"constraints":5,"maxAngularVelocity":6,"collisionDetectionMode":7,"interpolation":8},"Luna.Unity.DTO.UnityEngine.Components.Animator":{"animatorController":0,"updateMode":2,"humanBones":3,"enabled":4},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"sharedMesh":16,"bones":18,"updateWhenOffscreen":19,"localBounds":20,"rootBone":21,"blendShapesWeights":23},"Luna.Unity.DTO.UnityEngine.Components.SkinnedMeshRenderer+BlendShapeWeight":{"weight":0},"Luna.Unity.DTO.UnityEngine.Components.RectTransform":{"pivot":0,"anchorMin":2,"anchorMax":4,"sizeDelta":6,"anchoredPosition3D":8,"rotation":11,"scale":15},"Luna.Unity.DTO.UnityEngine.Components.Canvas":{"enabled":0,"planeDistance":1,"referencePixelsPerUnit":2,"isFallbackOverlay":3,"renderMode":4,"renderOrder":5,"sortingLayerName":6,"sortingOrder":7,"scaleFactor":8,"worldCamera":9,"overrideSorting":11,"pixelPerfect":12,"targetDisplay":13,"overridePixelPerfect":14},"Luna.Unity.DTO.UnityEngine.Components.CanvasRenderer":{"cullTransparentMesh":0},"Luna.Unity.DTO.UnityEngine.Components.MeshCollider":{"enabled":0,"isTrigger":1,"material":2,"sharedMesh":4,"convex":6},"Luna.Unity.DTO.UnityEngine.Components.CapsuleCollider":{"center":0,"radius":3,"height":4,"direction":5,"enabled":6,"isTrigger":7,"material":8},"Luna.Unity.DTO.UnityEngine.Textures.Texture2D":{"name":0,"width":1,"height":2,"mipmapCount":3,"anisoLevel":4,"filterMode":5,"hdr":6,"format":7,"wrapMode":8,"alphaIsTransparency":9,"alphaSource":10},"Luna.Unity.DTO.UnityEngine.Assets.Mesh":{"name":0,"halfPrecision":1,"vertexCount":2,"aabb":3,"streams":4,"vertices":5,"subMeshes":6,"bindposes":7,"blendShapes":8},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+SubMesh":{"triangles":0},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShape":{"name":0,"frames":1},"Luna.Unity.DTO.UnityEngine.Components.TrailRenderer":{"enabled":0,"sharedMaterial":1,"sharedMaterials":3,"receiveShadows":4,"shadowCastingMode":5,"sortingLayerID":6,"sortingOrder":7,"lightmapIndex":8,"lightmapSceneIndex":9,"lightmapScaleOffset":10,"lightProbeUsage":14,"reflectionProbeUsage":15,"positions":16,"positionCount":17,"time":18,"startWidth":19,"endWidth":20,"widthMultiplier":21,"autodestruct":22,"emitting":23,"numCornerVertices":24,"numCapVertices":25,"minVertexDistance":26,"colorGradient":27,"startColor":28,"endColor":32,"generateLightingData":36,"textureMode":37,"alignment":38,"widthCurve":39},"Luna.Unity.DTO.UnityEngine.Textures.Cubemap":{"name":0,"atlasId":1,"mipmapCount":2,"hdr":3,"size":4,"anisoLevel":5,"filterMode":6,"wrapMode":7,"rects":8},"Luna.Unity.DTO.UnityEngine.Scene.Scene":{"name":0,"index":1,"startup":2},"Luna.Unity.DTO.UnityEngine.Components.Camera":{"enabled":0,"aspect":1,"orthographic":2,"orthographicSize":3,"backgroundColor":4,"nearClipPlane":8,"farClipPlane":9,"fieldOfView":10,"depth":11,"clearFlags":12,"cullingMask":13,"rect":14,"targetTexture":15},"Luna.Unity.DTO.UnityEngine.Components.Light":{"enabled":0,"type":1,"color":2,"cullingMask":6,"intensity":7,"range":8,"spotAngle":9,"shadows":10,"shadowNormalBias":11,"shadowBias":12,"shadowStrength":13,"lightmapBakeType":14,"renderMode":15,"cookie":16,"cookieSize":18},"Luna.Unity.DTO.UnityEngine.Components.AudioSource":{"clip":0,"outputAudioMixerGroup":2,"playOnAwake":4,"loop":5,"time":6,"volume":7,"pitch":8,"enabled":9},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings":{"ambientIntensity":0,"reflectionIntensity":1,"ambientMode":2,"ambientLight":3,"ambientSkyColor":7,"ambientGroundColor":11,"ambientEquatorColor":15,"fogColor":19,"fogEndDistance":23,"fogStartDistance":24,"fogDensity":25,"fog":26,"skybox":27,"fogMode":29,"lightmaps":30,"lightProbes":31,"lightmapsMode":32,"environmentLightingMode":33,"ambientProbe":34,"customReflection":35,"defaultReflection":37,"defaultReflectionMode":39,"defaultReflectionResolution":40,"sunLightObjectId":41,"pixelLightCount":42,"defaultReflectionHDR":43,"hasLightDataAsset":44,"hasManualGenerate":45},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+Lightmap":{"lightmapColor":0,"lightmapDirection":2},"Luna.Unity.DTO.UnityEngine.Assets.RenderSettings+LightProbes":{"bakedProbes":0,"positions":1,"hullRays":2,"tetrahedra":3,"neighbours":4,"matrices":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader":{"invalidShaderVariants":0,"name":1,"guid":2,"shaderDefinedKeywords":3,"passes":4,"usePasses":5,"defaultParameterValues":6,"unityFallbackShader":7,"readDepth":9,"isCreatedByShaderGraph":10},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass":{"id":0,"subShaderIndex":1,"name":2,"passType":3,"usePass":4,"zTest":5,"zWrite":6,"culling":7,"blending":8,"alphaBlending":9,"colorWriteMask":10,"offsetUnits":11,"offsetFactor":12,"stencilRef":13,"stencilReadMask":14,"stencilWriteMask":15,"stencilOp":16,"stencilOpFront":17,"stencilOpBack":18,"tags":19,"passDefinedKeywords":20,"variants":21,"excludedVariants":22,"hasDepthReader":23},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Value":{"val":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Blending":{"src":0,"dst":1,"op":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+StencilOp":{"pass":0,"fail":1,"zFail":2,"comp":3},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Tag":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.Shader+Pass+Variant":{"passId":0,"subShaderIndex":1,"keywords":2,"vertexProgram":3,"fragmentProgram":4,"readDepth":5},"Luna.Unity.DTO.UnityEngine.Assets.Shader+UsePass":{"shader":0,"pass":2},"Luna.Unity.DTO.UnityEngine.Assets.Shader+DefaultParameterValue":{"name":0,"type":1,"value":2,"textureValue":6},"Luna.Unity.DTO.UnityEngine.Textures.Sprite":{"name":0,"texture":1,"aabb":3,"vertices":4,"triangles":5,"textureRect":6,"packedRect":10,"border":14,"transparency":18,"bounds":19,"pixelsPerUnit":20,"textureWidth":21,"textureHeight":22,"nativeSize":23,"pivot":25,"textureRectOffset":27},"Luna.Unity.DTO.UnityEngine.Assets.AudioClip":{"name":0},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationClip":{"name":0,"wrapMode":1,"isLooping":2,"length":3,"curves":4,"events":5,"halfPrecision":6},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve":{"path":0,"componentType":1,"property":2,"keys":3,"objectReferenceKeys":4},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationCurve+ObjectReferenceKey":{"time":0,"value":1},"Luna.Unity.DTO.UnityEngine.Animation.Data.AnimationEvent":{"functionName":0,"floatParameter":1,"intParameter":2,"stringParameter":3,"objectReferenceParameter":4,"time":6},"Luna.Unity.DTO.UnityEngine.Assets.Font":{"name":0,"ascent":1,"originalLineHeight":2,"fontSize":3,"characterInfo":4,"texture":5,"originalFontSize":7},"Luna.Unity.DTO.UnityEngine.Assets.Font+CharacterInfo":{"index":0,"advance":1,"bearing":2,"glyphWidth":3,"glyphHeight":4,"minX":5,"maxX":6,"minY":7,"maxY":8,"uvBottomLeftX":9,"uvBottomLeftY":10,"uvBottomRightX":11,"uvBottomRightY":12,"uvTopLeftX":13,"uvTopLeftY":14,"uvTopRightX":15,"uvTopRightY":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorController":{"name":0,"states":1,"layers":2,"parameters":3,"animationClips":4},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorState":{"cycleOffset":0,"cycleOffsetParameter":1,"cycleOffsetParameterActive":2,"mirror":3,"mirrorParameter":4,"mirrorParameterActive":5,"motionId":6,"nameHash":7,"fullPathHash":8,"speed":9,"speedParameter":10,"speedParameterActive":11,"tag":12,"name":13,"writeDefaultValues":14,"transitions":15,"behaviours":16},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateTransition":{"fullPath":0,"canTransitionToSelf":1,"duration":2,"exitTime":3,"hasExitTime":4,"hasFixedDuration":5,"interruptionSource":6,"offset":7,"orderedInterruption":8,"destinationStateNameHash":9,"destinationStateMachineId":10,"isExit":11,"mute":12,"solo":13,"conditions":14},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorCondition":{"mode":0,"parameter":1,"threshold":2},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerLayer":{"blendingMode":0,"defaultWeight":1,"name":2,"stateMachine":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorStateMachine":{"id":0,"defaultStateNameHash":1,"entryTransitions":2,"anyStateTransitions":3},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorTransition":{"destinationStateNameHash":0,"destinationStateMachineId":1,"isExit":2,"mute":3,"solo":4,"conditions":5},"Luna.Unity.DTO.UnityEngine.Animation.Mecanim.AnimatorControllerParameter":{"defaultBool":0,"defaultFloat":1,"defaultInt":2,"name":3,"nameHash":4,"type":5},"Luna.Unity.DTO.UnityEngine.Assets.TextAsset":{"name":0,"bytes64":1,"data":2},"Luna.Unity.DTO.UnityEngine.Assets.Resources":{"files":0,"componentToPrefabIds":1},"Luna.Unity.DTO.UnityEngine.Assets.Resources+File":{"path":0,"unityObject":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings":{"scriptsExecutionOrder":0,"sortingLayers":1,"cullingLayers":2,"timeSettings":3,"physicsSettings":4,"physics2DSettings":5,"qualitySettings":6,"removeShadows":7,"autoInstantiatePrefabs":8,"enableAutoInstancing":9,"lightmapEncodingQuality":10,"desiredColorSpace":11},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+ScriptsExecutionOrder":{"name":0,"value":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+SortingLayer":{"id":0,"name":1,"value":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+CullingLayer":{"id":0,"name":1},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+TimeSettings":{"fixedDeltaTime":0,"maximumDeltaTime":1,"timeScale":2,"maximumParticleTimestep":3},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings":{"gravity":0,"defaultSolverIterations":3,"bounceThreshold":4,"autoSyncTransforms":5,"autoSimulation":6,"collisionMatrix":7},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+PhysicsSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings":{"material":0,"gravity":2,"positionIterations":4,"velocityIterations":5,"velocityThreshold":6,"maxLinearCorrection":7,"maxAngularCorrection":8,"maxTranslationSpeed":9,"maxRotationSpeed":10,"timeToSleep":11,"linearSleepTolerance":12,"angularSleepTolerance":13,"defaultContactOffset":14,"autoSimulation":15,"queriesHitTriggers":16,"queriesStartInColliders":17,"callbacksOnDisable":18,"reuseCollisionCallbacks":19,"autoSyncTransforms":20,"collisionMatrix":21},"Luna.Unity.DTO.UnityEngine.Assets.ProjectSettings+Physics2DSettings+CollisionMask":{"enabled":0,"layerId":1,"otherLayerId":2},"Luna.Unity.DTO.UnityEngine.Assets.QualitySettings":{"qualityLevels":0,"names":1,"shadows":2,"anisotropicFiltering":3,"antiAliasing":4,"lodBias":5,"shadowCascades":6,"shadowDistance":7,"shadowmaskMode":8,"shadowProjection":9,"shadowResolution":10,"softParticles":11,"softVegetation":12,"activeColorSpace":13,"desiredColorSpace":14,"masterTextureLimit":15,"maxQueuedFrames":16,"particleRaycastBudget":17,"pixelLightCount":18,"realtimeReflectionProbes":19,"shadowCascade2Split":20,"shadowCascade4Split":21,"streamingMipmapsActive":24,"vSyncCount":25,"asyncUploadBufferSize":26,"asyncUploadTimeSlice":27,"billboardsFaceCameraPosition":28,"shadowNearPlaneOffset":29,"streamingMipmapsMemoryBudget":30,"maximumLODLevel":31,"streamingMipmapsAddAllCameras":32,"streamingMipmapsMaxLevelReduction":33,"streamingMipmapsRenderersPerFrame":34,"resolutionScalingFixedDPIFactor":35,"streamingMipmapsMaxFileIORequests":36,"currentQualityLevel":37},"Luna.Unity.DTO.UnityEngine.Assets.Mesh+BlendShapeFrame":{"weight":0,"vertices":1,"normals":2,"tangents":3}}

Deserializers.requiredComponents = {"55":[56],"57":[56],"58":[56],"59":[56],"60":[56],"61":[56],"62":[17],"63":[42],"64":[13],"65":[13],"66":[13],"67":[13],"68":[13],"69":[13],"70":[13],"71":[72],"73":[72],"74":[72],"75":[72],"76":[72],"77":[72],"78":[72],"79":[72],"80":[72],"81":[72],"82":[72],"83":[72],"84":[72],"85":[42],"86":[7],"87":[88],"89":[88],"19":[18],"90":[23,2,18],"91":[18],"92":[23,18],"93":[7],"94":[23,18],"95":[18],"96":[7,18],"97":[18,23],"98":[18],"99":[18],"100":[18],"22":[19],"24":[23,18],"101":[18],"21":[19],"102":[18],"103":[18],"33":[18],"104":[18],"105":[18],"106":[18],"107":[18],"108":[18],"109":[18],"110":[23,18],"111":[18],"112":[18],"113":[18],"114":[18],"12":[23,18],"115":[18],"116":[28],"117":[28],"29":[28],"118":[28],"119":[42],"120":[42],"121":[34]}

Deserializers.types = ["UnityEngine.Shader","UnityEngine.Transform","UnityEngine.ParticleSystem","UnityEngine.ParticleSystemRenderer","UnityEngine.Material","UnityEngine.Mesh","UnityEngine.MeshFilter","UnityEngine.MeshRenderer","UnityEngine.BoxCollider","UnityEngine.MonoBehaviour","CreateGridPlayer","UnityEngine.GameObject","UnityEngine.UI.Text","UnityEngine.Rigidbody","UnityEngine.Animator","UnityEditor.Animations.AnimatorController","PlayerController","UnityEngine.SkinnedMeshRenderer","UnityEngine.RectTransform","UnityEngine.Canvas","UnityEngine.EventSystems.UIBehaviour","UnityEngine.UI.CanvasScaler","UnityEngine.UI.GraphicRaycaster","UnityEngine.CanvasRenderer","UnityEngine.UI.Image","UnityEngine.Sprite","UnityEngine.UI.Shadow","DragPlayer","UnityEngine.EventSystems.EventSystem","UnityEngine.EventSystems.StandaloneInputModule","UnityEngine.EventSystems.BaseInput","FixedUI","UnityEngine.Font","UnityEngine.UI.HorizontalLayoutGroup","UnityEngine.UI.Button","UnityEngine.MeshCollider","UnityEngine.CapsuleCollider","UnityEngine.Texture2D","ItemGridControl","ControlChuong","UnityEngine.TrailRenderer","Storelink","UnityEngine.Camera","UnityEngine.AudioListener","UnityEngine.Light","GameController","SoundManager","UnityEngine.AudioSource","UnityEngine.AudioClip","UnityEngine.Cubemap","TMPro.TMP_Settings","TMPro.TMP_FontAsset","TMPro.TMP_SpriteAsset","TMPro.TMP_StyleSheet","UnityEngine.TextAsset","UnityEngine.AudioLowPassFilter","UnityEngine.AudioBehaviour","UnityEngine.AudioHighPassFilter","UnityEngine.AudioReverbFilter","UnityEngine.AudioDistortionFilter","UnityEngine.AudioEchoFilter","UnityEngine.AudioChorusFilter","UnityEngine.Cloth","UnityEngine.FlareLayer","UnityEngine.ConstantForce","UnityEngine.Joint","UnityEngine.HingeJoint","UnityEngine.SpringJoint","UnityEngine.FixedJoint","UnityEngine.CharacterJoint","UnityEngine.ConfigurableJoint","UnityEngine.CompositeCollider2D","UnityEngine.Rigidbody2D","UnityEngine.Joint2D","UnityEngine.AnchoredJoint2D","UnityEngine.SpringJoint2D","UnityEngine.DistanceJoint2D","UnityEngine.FrictionJoint2D","UnityEngine.HingeJoint2D","UnityEngine.RelativeJoint2D","UnityEngine.SliderJoint2D","UnityEngine.TargetJoint2D","UnityEngine.FixedJoint2D","UnityEngine.WheelJoint2D","UnityEngine.ConstantForce2D","UnityEngine.StreamingController","UnityEngine.TextMesh","UnityEngine.Tilemaps.TilemapRenderer","UnityEngine.Tilemaps.Tilemap","UnityEngine.Tilemaps.TilemapCollider2D","UnityEngine.UI.Extensions.UIParticleSystem","TMPro.TMP_Dropdown","TMPro.TMP_SelectionCaret","TMPro.TMP_SubMesh","TMPro.TMP_SubMeshUI","TMPro.TMP_Text","TMPro.TextMeshPro","TMPro.TextMeshProUGUI","TMPro.TextContainer","UnityEngine.UI.Dropdown","UnityEngine.UI.Graphic","UnityEngine.UI.AspectRatioFitter","UnityEngine.UI.ContentSizeFitter","UnityEngine.UI.GridLayoutGroup","UnityEngine.UI.HorizontalOrVerticalLayoutGroup","UnityEngine.UI.LayoutElement","UnityEngine.UI.LayoutGroup","UnityEngine.UI.VerticalLayoutGroup","UnityEngine.UI.Mask","UnityEngine.UI.MaskableGraphic","UnityEngine.UI.RawImage","UnityEngine.UI.RectMask2D","UnityEngine.UI.ScrollRect","UnityEngine.UI.Scrollbar","UnityEngine.UI.Slider","UnityEngine.UI.Toggle","UnityEngine.EventSystems.BaseInputModule","UnityEngine.EventSystems.PointerInputModule","UnityEngine.EventSystems.TouchInputModule","UnityEngine.EventSystems.Physics2DRaycaster","UnityEngine.EventSystems.PhysicsRaycaster","UnityEngine.Purchasing.IAPButton"]

Deserializers.unityVersion = "2020.3.36f1";

Deserializers.productName = "Toy Playable";

Deserializers.lunaInitializationTime = "09/08/2022 17:06:56";

Deserializers.lunaDaysRunning = "0.6";

Deserializers.lunaVersion = "3.12.0";

Deserializers.lunaSHA = "ae3e1c51dc31f375c7aae66345de1c1fcffa9c7d";

Deserializers.creativeName = "build_test-fixMB";

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

Deserializers.buildID = "c77a10dc-32c2-4b20-a372-1a23f7bf1f54";

Deserializers.typeNameToIdMap = function(){ var i = 0; return Deserializers.types.reduce( function( res, item ) { res[ item ] = i++; return res; }, {} ) }()

