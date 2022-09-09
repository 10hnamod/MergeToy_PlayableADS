["#version 100\n\nuniform \tvec3 _WorldSpaceCameraPos;\nuniform \tmediump vec4 unity_SHBr;\nuniform \tmediump vec4 unity_SHBg;\nuniform \tmediump vec4 unity_SHBb;\nuniform \tmediump vec4 unity_SHC;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _DetailAlbedoMap_ST;\nuniform \tmediump float _UVSec;\nattribute highp vec4 in_POSITION0;\nattribute mediump vec3 in_NORMAL0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying highp vec4 vs_TEXCOORD3;\nvarying highp vec4 vs_TEXCOORD4;\nvarying mediump vec4 vs_TEXCOORD5;\nvarying highp vec4 vs_TEXCOORD7;\nvarying highp vec3 vs_TEXCOORD8;\nvec4 u_xlat0;\nmediump vec4 u_xlat16_0;\nbool u_xlatb0;\nvec4 u_xlat1;\nmediump float u_xlat16_2;\nmediump vec3 u_xlat16_3;\nfloat u_xlat12;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlatb0 = _UVSec==0.0;\n    u_xlat0.xy = (bool(u_xlatb0)) ? in_TEXCOORD0.xy : in_TEXCOORD1.xy;\n    vs_TEXCOORD0.zw = u_xlat0.xy * _DetailAlbedoMap_ST.xy + _DetailAlbedoMap_ST.zw;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0.xyz = in_POSITION0.yyy * hlslcc_mtx4x4unity_ObjectToWorld[1].xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[0].xyz * in_POSITION0.xxx + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[2].xyz * in_POSITION0.zzz + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[3].xyz * in_POSITION0.www + u_xlat0.xyz;\n    vs_TEXCOORD1.xyz = u_xlat0.xyz + (-_WorldSpaceCameraPos.xyz);\n    vs_TEXCOORD8.xyz = u_xlat0.xyz;\n    vs_TEXCOORD1.w = 0.0;\n    vs_TEXCOORD2 = vec4(0.0, 0.0, 0.0, 0.0);\n    vs_TEXCOORD3 = vec4(0.0, 0.0, 0.0, 0.0);\n    u_xlat0.x = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[0].xyz);\n    u_xlat0.y = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[1].xyz);\n    u_xlat0.z = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[2].xyz);\n    u_xlat12 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat12 = inversesqrt(u_xlat12);\n    u_xlat0.xyz = vec3(u_xlat12) * u_xlat0.xyz;\n    vs_TEXCOORD4.xyz = u_xlat0.xyz;\n    vs_TEXCOORD4.w = 0.0;\n    u_xlat16_2 = u_xlat0.y * u_xlat0.y;\n    u_xlat16_2 = u_xlat0.x * u_xlat0.x + (-u_xlat16_2);\n    u_xlat16_0 = u_xlat0.yzzx * u_xlat0.xyzz;\n    u_xlat16_3.x = dot(unity_SHBr, u_xlat16_0);\n    u_xlat16_3.y = dot(unity_SHBg, u_xlat16_0);\n    u_xlat16_3.z = dot(unity_SHBb, u_xlat16_0);\n    vs_TEXCOORD5.xyz = unity_SHC.xyz * vec3(u_xlat16_2) + u_xlat16_3.xyz;\n    vs_TEXCOORD5.w = 0.0;\n    vs_TEXCOORD7 = vec4(0.0, 0.0, 0.0, 0.0);\n    return;\n}\n\n","#version 100\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod : enable\n#endif\n#if !defined(GL_EXT_shader_texture_lod)\n#define texture1DLodEXT texture1D\n#define texture2DLodEXT texture2D\n#define texture2DProjLodEXT texture2DProj\n#define texture3DLodEXT texture3D\n#define textureCubeLodEXT textureCube\n#endif\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _WorldSpaceLightPos0;\nuniform \tmediump vec4 unity_SHAr;\nuniform \tmediump vec4 unity_SHAg;\nuniform \tmediump vec4 unity_SHAb;\nuniform \tvec4 unity_SpecCube0_BoxMax;\nuniform \tvec4 unity_SpecCube0_BoxMin;\nuniform \tvec4 unity_SpecCube0_ProbePosition;\nuniform \tmediump vec4 unity_SpecCube0_HDR;\nuniform \tvec4 unity_SpecCube1_BoxMax;\nuniform \tvec4 unity_SpecCube1_BoxMin;\nuniform \tvec4 unity_SpecCube1_ProbePosition;\nuniform \tmediump vec4 unity_SpecCube1_HDR;\nuniform \tmediump vec4 _LightColor0;\nuniform \tmediump vec4 _Color;\nuniform \tmediump float _Metallic;\nuniform \tfloat _Glossiness;\nuniform \tmediump float _OcclusionStrength;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _OcclusionMap;\nuniform lowp samplerCube unity_SpecCube0;\nuniform lowp samplerCube unity_SpecCube1;\nvarying highp vec4 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD4;\nvarying mediump vec4 vs_TEXCOORD5;\nvarying highp vec3 vs_TEXCOORD8;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec3 u_xlat10_0;\nvec3 u_xlat1;\nbool u_xlatb1;\nmediump vec3 u_xlat16_2;\nmediump vec3 u_xlat16_3;\nfloat u_xlat4;\nlowp float u_xlat10_4;\nmediump vec3 u_xlat16_5;\nlowp vec4 u_xlat10_5;\nmediump vec3 u_xlat16_6;\nlowp vec4 u_xlat10_6;\nvec3 u_xlat7;\nvec3 u_xlat8;\nvec3 u_xlat9;\nbvec3 u_xlatb10;\nmediump vec3 u_xlat16_11;\nmediump vec4 u_xlat16_12;\nmediump vec3 u_xlat16_13;\nfloat u_xlat14;\nvec3 u_xlat15;\nvec3 u_xlat18;\nvec3 u_xlat25;\nmediump vec3 u_xlat16_25;\nmediump float u_xlat16_26;\nfloat u_xlat28;\nfloat u_xlat29;\nmediump float u_xlat16_40;\nfloat u_xlat42;\nbool u_xlatb42;\nfloat u_xlat43;\nmediump float u_xlat16_44;\nmediump float u_xlat16_45;\nmediump float u_xlat16_47;\nmediump float u_xlat16_53;\nvoid main()\n{\n    u_xlat10_0.xyz = texture2D(_MainTex, vs_TEXCOORD0.xy).xyz;\n    u_xlat1.xyz = u_xlat10_0.xyz * _Color.xyz;\n    u_xlat16_2.xyz = _Color.xyz * u_xlat10_0.xyz + vec3(-0.220916301, -0.220916301, -0.220916301);\n    u_xlat16_2.xyz = vec3(vec3(_Metallic, _Metallic, _Metallic)) * u_xlat16_2.xyz + vec3(0.220916301, 0.220916301, 0.220916301);\n    u_xlat16_44 = (-_Metallic) * 0.779083729 + 0.779083729;\n    u_xlat16_3.xyz = u_xlat1.xyz * vec3(u_xlat16_44);\n    u_xlat0.x = dot(vs_TEXCOORD4.xyz, vs_TEXCOORD4.xyz);\n    u_xlat0.x = inversesqrt(u_xlat0.x);\n    u_xlat0.xyz = u_xlat0.xxx * vs_TEXCOORD4.xyz;\n    u_xlat1.x = dot(vs_TEXCOORD1.xyz, vs_TEXCOORD1.xyz);\n    u_xlat1.x = inversesqrt(u_xlat1.x);\n    u_xlat15.xyz = u_xlat1.xxx * vs_TEXCOORD1.xyz;\n    u_xlat10_4 = texture2D(_OcclusionMap, vs_TEXCOORD0.xy).y;\n    u_xlat16_45 = (-_OcclusionStrength) + 1.0;\n    u_xlat16_45 = u_xlat10_4 * _OcclusionStrength + u_xlat16_45;\n    u_xlat4 = (-_Glossiness) + 1.0;\n    u_xlat16_5.x = dot(u_xlat15.xyz, u_xlat0.xyz);\n    u_xlat16_5.x = u_xlat16_5.x + u_xlat16_5.x;\n    u_xlat16_5.xyz = u_xlat0.xyz * (-u_xlat16_5.xxx) + u_xlat15.xyz;\n    u_xlat0.w = 1.0;\n    u_xlat16_6.x = dot(unity_SHAr, u_xlat0);\n    u_xlat16_6.y = dot(unity_SHAg, u_xlat0);\n    u_xlat16_6.z = dot(unity_SHAb, u_xlat0);\n    u_xlat16_6.xyz = u_xlat16_6.xyz + vs_TEXCOORD5.xyz;\n    u_xlat16_6.xyz = max(u_xlat16_6.xyz, vec3(0.0, 0.0, 0.0));\n    u_xlat18.xyz = log2(u_xlat16_6.xyz);\n    u_xlat18.xyz = u_xlat18.xyz * vec3(0.416666657, 0.416666657, 0.416666657);\n    u_xlat18.xyz = exp2(u_xlat18.xyz);\n    u_xlat18.xyz = u_xlat18.xyz * vec3(1.05499995, 1.05499995, 1.05499995) + vec3(-0.0549999997, -0.0549999997, -0.0549999997);\n    u_xlat18.xyz = max(u_xlat18.xyz, vec3(0.0, 0.0, 0.0));\n    u_xlatb42 = 0.0<unity_SpecCube0_ProbePosition.w;\n    if(u_xlatb42){\n        u_xlat42 = dot(u_xlat16_5.xyz, u_xlat16_5.xyz);\n        u_xlat42 = inversesqrt(u_xlat42);\n        u_xlat7.xyz = vec3(u_xlat42) * u_xlat16_5.xyz;\n        u_xlat8.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube0_BoxMax.xyz;\n        u_xlat8.xyz = u_xlat8.xyz / u_xlat7.xyz;\n        u_xlat9.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube0_BoxMin.xyz;\n        u_xlat9.xyz = u_xlat9.xyz / u_xlat7.xyz;\n        u_xlatb10.xyz = lessThan(vec4(0.0, 0.0, 0.0, 0.0), u_xlat7.xyzx).xyz;\n        {\n            vec3 hlslcc_movcTemp = u_xlat8;\n            hlslcc_movcTemp.x = (u_xlatb10.x) ? u_xlat8.x : u_xlat9.x;\n            hlslcc_movcTemp.y = (u_xlatb10.y) ? u_xlat8.y : u_xlat9.y;\n            hlslcc_movcTemp.z = (u_xlatb10.z) ? u_xlat8.z : u_xlat9.z;\n            u_xlat8 = hlslcc_movcTemp;\n        }\n        u_xlat42 = min(u_xlat8.y, u_xlat8.x);\n        u_xlat42 = min(u_xlat8.z, u_xlat42);\n        u_xlat8.xyz = vs_TEXCOORD8.xyz + (-unity_SpecCube0_ProbePosition.xyz);\n        u_xlat7.xyz = u_xlat7.xyz * vec3(u_xlat42) + u_xlat8.xyz;\n    } else {\n        u_xlat7.xyz = u_xlat16_5.xyz;\n    }\n    u_xlat16_47 = (-u_xlat4) * 0.699999988 + 1.70000005;\n    u_xlat16_47 = u_xlat4 * u_xlat16_47;\n    u_xlat16_47 = u_xlat16_47 * 6.0;\n    u_xlat10_6 = textureCubeLodEXT(unity_SpecCube0, u_xlat7.xyz, u_xlat16_47);\n    u_xlat16_11.x = u_xlat10_6.w + -1.0;\n    u_xlat16_11.x = unity_SpecCube0_HDR.w * u_xlat16_11.x + 1.0;\n    u_xlat16_11.x = u_xlat16_11.x * unity_SpecCube0_HDR.x;\n    u_xlat16_25.xyz = u_xlat10_6.xyz * u_xlat16_11.xxx;\n    u_xlatb42 = unity_SpecCube0_BoxMin.w<0.999989986;\n    if(u_xlatb42){\n        u_xlatb42 = 0.0<unity_SpecCube1_ProbePosition.w;\n        if(u_xlatb42){\n            u_xlat42 = dot(u_xlat16_5.xyz, u_xlat16_5.xyz);\n            u_xlat42 = inversesqrt(u_xlat42);\n            u_xlat7.xyz = vec3(u_xlat42) * u_xlat16_5.xyz;\n            u_xlat8.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube1_BoxMax.xyz;\n            u_xlat8.xyz = u_xlat8.xyz / u_xlat7.xyz;\n            u_xlat9.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube1_BoxMin.xyz;\n            u_xlat9.xyz = u_xlat9.xyz / u_xlat7.xyz;\n            u_xlatb10.xyz = lessThan(vec4(0.0, 0.0, 0.0, 0.0), u_xlat7.xyzx).xyz;\n            {\n                vec3 hlslcc_movcTemp = u_xlat8;\n                hlslcc_movcTemp.x = (u_xlatb10.x) ? u_xlat8.x : u_xlat9.x;\n                hlslcc_movcTemp.y = (u_xlatb10.y) ? u_xlat8.y : u_xlat9.y;\n                hlslcc_movcTemp.z = (u_xlatb10.z) ? u_xlat8.z : u_xlat9.z;\n                u_xlat8 = hlslcc_movcTemp;\n            }\n            u_xlat42 = min(u_xlat8.y, u_xlat8.x);\n            u_xlat42 = min(u_xlat8.z, u_xlat42);\n            u_xlat8.xyz = vs_TEXCOORD8.xyz + (-unity_SpecCube1_ProbePosition.xyz);\n            u_xlat7.xyz = u_xlat7.xyz * vec3(u_xlat42) + u_xlat8.xyz;\n        } else {\n            u_xlat7.xyz = u_xlat16_5.xyz;\n        }\n        u_xlat10_5 = textureCubeLodEXT(unity_SpecCube1, u_xlat7.xyz, u_xlat16_47);\n        u_xlat16_12.x = u_xlat10_5.w + -1.0;\n        u_xlat16_12.x = unity_SpecCube1_HDR.w * u_xlat16_12.x + 1.0;\n        u_xlat16_12.x = u_xlat16_12.x * unity_SpecCube1_HDR.x;\n        u_xlat16_12.xyz = u_xlat10_5.xyz * u_xlat16_12.xxx;\n        u_xlat7.xyz = u_xlat16_11.xxx * u_xlat10_6.xyz + (-u_xlat16_12.xyz);\n        u_xlat25.xyz = unity_SpecCube0_BoxMin.www * u_xlat7.xyz + u_xlat16_12.xyz;\n        u_xlat16_25.xyz = u_xlat25.xyz;\n    }\n    u_xlat16_11.xyz = vec3(u_xlat16_45) * u_xlat16_25.xyz;\n    u_xlat7.xyz = (-vs_TEXCOORD1.xyz) * u_xlat1.xxx + _WorldSpaceLightPos0.xyz;\n    u_xlat42 = dot(u_xlat7.xyz, u_xlat7.xyz);\n    u_xlat42 = max(u_xlat42, 0.00100000005);\n    u_xlat42 = inversesqrt(u_xlat42);\n    u_xlat7.xyz = vec3(u_xlat42) * u_xlat7.xyz;\n    u_xlat42 = dot(u_xlat0.xyz, (-u_xlat15.xyz));\n    u_xlat1.x = dot(u_xlat0.xyz, _WorldSpaceLightPos0.xyz);\n    u_xlat1.x = clamp(u_xlat1.x, 0.0, 1.0);\n    u_xlat0.x = dot(u_xlat0.xyz, u_xlat7.xyz);\n    u_xlat0.x = clamp(u_xlat0.x, 0.0, 1.0);\n    u_xlat14 = dot(_WorldSpaceLightPos0.xyz, u_xlat7.xyz);\n    u_xlat14 = clamp(u_xlat14, 0.0, 1.0);\n    u_xlat16_53 = u_xlat14 + u_xlat14;\n    u_xlat16_53 = u_xlat14 * u_xlat16_53;\n    u_xlat16_53 = u_xlat16_53 * u_xlat4 + -0.5;\n    u_xlat16_12.x = (-u_xlat1.x) + 1.0;\n    u_xlat16_26 = u_xlat16_12.x * u_xlat16_12.x;\n    u_xlat16_26 = u_xlat16_26 * u_xlat16_26;\n    u_xlat16_12.x = u_xlat16_12.x * u_xlat16_26;\n    u_xlat16_12.x = u_xlat16_53 * u_xlat16_12.x + 1.0;\n    u_xlat16_26 = -abs(u_xlat42) + 1.0;\n    u_xlat16_40 = u_xlat16_26 * u_xlat16_26;\n    u_xlat16_40 = u_xlat16_40 * u_xlat16_40;\n    u_xlat16_26 = u_xlat16_26 * u_xlat16_40;\n    u_xlat16_53 = u_xlat16_53 * u_xlat16_26 + 1.0;\n    u_xlat16_53 = u_xlat16_53 * u_xlat16_12.x;\n    u_xlat28 = u_xlat1.x * u_xlat16_53;\n    u_xlat15.x = u_xlat4 * u_xlat4;\n    u_xlat15.x = max(u_xlat15.x, 0.00200000009);\n    u_xlat29 = (-u_xlat15.x) + 1.0;\n    u_xlat43 = abs(u_xlat42) * u_xlat29 + u_xlat15.x;\n    u_xlat29 = u_xlat1.x * u_xlat29 + u_xlat15.x;\n    u_xlat42 = abs(u_xlat42) * u_xlat29;\n    u_xlat42 = u_xlat1.x * u_xlat43 + u_xlat42;\n    u_xlat42 = u_xlat42 + 9.99999975e-06;\n    u_xlat42 = 0.5 / u_xlat42;\n    u_xlat29 = u_xlat15.x * u_xlat15.x;\n    u_xlat43 = u_xlat0.x * u_xlat29 + (-u_xlat0.x);\n    u_xlat0.x = u_xlat43 * u_xlat0.x + 1.0;\n    u_xlat29 = u_xlat29 * 0.318309873;\n    u_xlat0.x = u_xlat0.x * u_xlat0.x + 1.00000001e-07;\n    u_xlat0.x = u_xlat29 / u_xlat0.x;\n    u_xlat0.x = u_xlat0.x * u_xlat42;\n    u_xlat0.x = u_xlat0.x * 3.14159274;\n    u_xlat0.x = max(u_xlat0.x, 9.99999975e-05);\n    u_xlat0.x = sqrt(u_xlat0.x);\n    u_xlat0.x = u_xlat1.x * u_xlat0.x;\n    u_xlat42 = u_xlat15.x * u_xlat4;\n    u_xlat42 = (-u_xlat42) * 0.280000001 + 1.0;\n    u_xlat16_53 = dot(u_xlat16_2.xyz, u_xlat16_2.xyz);\n    u_xlatb1 = u_xlat16_53!=0.0;\n    u_xlat1.x = u_xlatb1 ? 1.0 : float(0.0);\n    u_xlat0.x = u_xlat0.x * u_xlat1.x;\n    u_xlat16_44 = (-u_xlat16_44) + 1.0;\n    u_xlat16_44 = u_xlat16_44 + _Glossiness;\n    u_xlat16_44 = clamp(u_xlat16_44, 0.0, 1.0);\n    u_xlat16_12.xzw = vec3(u_xlat28) * _LightColor0.xyz;\n    u_xlat16_12.xzw = u_xlat18.xyz * vec3(u_xlat16_45) + u_xlat16_12.xzw;\n    u_xlat1.xyz = u_xlat0.xxx * _LightColor0.xyz;\n    u_xlat16_45 = (-u_xlat14) + 1.0;\n    u_xlat16_53 = u_xlat16_45 * u_xlat16_45;\n    u_xlat16_53 = u_xlat16_53 * u_xlat16_53;\n    u_xlat16_45 = u_xlat16_45 * u_xlat16_53;\n    u_xlat16_13.xyz = (-u_xlat16_2.xyz) + vec3(1.0, 1.0, 1.0);\n    u_xlat16_13.xyz = u_xlat16_13.xyz * vec3(u_xlat16_45) + u_xlat16_2.xyz;\n    u_xlat0.xyz = u_xlat1.xyz * u_xlat16_13.xyz;\n    u_xlat0.xyz = u_xlat16_3.xyz * u_xlat16_12.xzw + u_xlat0.xyz;\n    u_xlat16_3.xyz = u_xlat16_11.xyz * vec3(u_xlat42);\n    u_xlat16_11.xyz = (-u_xlat16_2.xyz) + vec3(u_xlat16_44);\n    u_xlat16_2.xyz = vec3(u_xlat16_26) * u_xlat16_11.xyz + u_xlat16_2.xyz;\n    u_xlat0.xyz = u_xlat16_3.xyz * u_xlat16_2.xyz + u_xlat0.xyz;\n    SV_Target0.xyz = u_xlat0.xyz;\n    SV_Target0.w = 1.0;\n    return;\n}\n\n","#version 100\n\nuniform \tvec3 _WorldSpaceCameraPos;\nuniform \tmediump vec4 unity_SHBr;\nuniform \tmediump vec4 unity_SHBg;\nuniform \tmediump vec4 unity_SHBb;\nuniform \tmediump vec4 unity_SHC;\nuniform \tvec4 hlslcc_mtx4x4unity_ObjectToWorld[4];\nuniform \tvec4 hlslcc_mtx4x4unity_WorldToObject[4];\nuniform \tvec4 hlslcc_mtx4x4unity_MatrixVP[4];\nuniform \tvec4 _MainTex_ST;\nuniform \tvec4 _DetailAlbedoMap_ST;\nuniform \tmediump float _UVSec;\nattribute highp vec4 in_POSITION0;\nattribute mediump vec3 in_NORMAL0;\nattribute highp vec2 in_TEXCOORD0;\nattribute highp vec2 in_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD2;\nvarying highp vec4 vs_TEXCOORD3;\nvarying highp vec4 vs_TEXCOORD4;\nvarying mediump vec4 vs_TEXCOORD5;\nvarying highp vec4 vs_TEXCOORD7;\nvarying highp vec3 vs_TEXCOORD8;\nvec4 u_xlat0;\nmediump vec4 u_xlat16_0;\nbool u_xlatb0;\nvec4 u_xlat1;\nmediump float u_xlat16_2;\nmediump vec3 u_xlat16_3;\nfloat u_xlat12;\nvoid main()\n{\n    u_xlat0 = in_POSITION0.yyyy * hlslcc_mtx4x4unity_ObjectToWorld[1];\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[0] * in_POSITION0.xxxx + u_xlat0;\n    u_xlat0 = hlslcc_mtx4x4unity_ObjectToWorld[2] * in_POSITION0.zzzz + u_xlat0;\n    u_xlat0 = u_xlat0 + hlslcc_mtx4x4unity_ObjectToWorld[3];\n    u_xlat1 = u_xlat0.yyyy * hlslcc_mtx4x4unity_MatrixVP[1];\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[0] * u_xlat0.xxxx + u_xlat1;\n    u_xlat1 = hlslcc_mtx4x4unity_MatrixVP[2] * u_xlat0.zzzz + u_xlat1;\n    gl_Position = hlslcc_mtx4x4unity_MatrixVP[3] * u_xlat0.wwww + u_xlat1;\n    u_xlatb0 = _UVSec==0.0;\n    u_xlat0.xy = (bool(u_xlatb0)) ? in_TEXCOORD0.xy : in_TEXCOORD1.xy;\n    vs_TEXCOORD0.zw = u_xlat0.xy * _DetailAlbedoMap_ST.xy + _DetailAlbedoMap_ST.zw;\n    vs_TEXCOORD0.xy = in_TEXCOORD0.xy * _MainTex_ST.xy + _MainTex_ST.zw;\n    u_xlat0.xyz = in_POSITION0.yyy * hlslcc_mtx4x4unity_ObjectToWorld[1].xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[0].xyz * in_POSITION0.xxx + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[2].xyz * in_POSITION0.zzz + u_xlat0.xyz;\n    u_xlat0.xyz = hlslcc_mtx4x4unity_ObjectToWorld[3].xyz * in_POSITION0.www + u_xlat0.xyz;\n    vs_TEXCOORD1.xyz = u_xlat0.xyz + (-_WorldSpaceCameraPos.xyz);\n    vs_TEXCOORD8.xyz = u_xlat0.xyz;\n    vs_TEXCOORD1.w = 0.0;\n    vs_TEXCOORD2 = vec4(0.0, 0.0, 0.0, 0.0);\n    vs_TEXCOORD3 = vec4(0.0, 0.0, 0.0, 0.0);\n    u_xlat0.x = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[0].xyz);\n    u_xlat0.y = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[1].xyz);\n    u_xlat0.z = dot(in_NORMAL0.xyz, hlslcc_mtx4x4unity_WorldToObject[2].xyz);\n    u_xlat12 = dot(u_xlat0.xyz, u_xlat0.xyz);\n    u_xlat12 = inversesqrt(u_xlat12);\n    u_xlat0.xyz = vec3(u_xlat12) * u_xlat0.xyz;\n    vs_TEXCOORD4.xyz = u_xlat0.xyz;\n    vs_TEXCOORD4.w = 0.0;\n    u_xlat16_2 = u_xlat0.y * u_xlat0.y;\n    u_xlat16_2 = u_xlat0.x * u_xlat0.x + (-u_xlat16_2);\n    u_xlat16_0 = u_xlat0.yzzx * u_xlat0.xyzz;\n    u_xlat16_3.x = dot(unity_SHBr, u_xlat16_0);\n    u_xlat16_3.y = dot(unity_SHBg, u_xlat16_0);\n    u_xlat16_3.z = dot(unity_SHBb, u_xlat16_0);\n    vs_TEXCOORD5.xyz = unity_SHC.xyz * vec3(u_xlat16_2) + u_xlat16_3.xyz;\n    vs_TEXCOORD5.w = 0.0;\n    vs_TEXCOORD7 = vec4(0.0, 0.0, 0.0, 0.0);\n    return;\n}\n\n","#version 100\n#ifdef GL_EXT_shader_texture_lod\n#extension GL_EXT_shader_texture_lod : enable\n#endif\n#if !defined(GL_EXT_shader_texture_lod)\n#define texture1DLodEXT texture1D\n#define texture2DLodEXT texture2D\n#define texture2DProjLodEXT texture2DProj\n#define texture3DLodEXT texture3D\n#define textureCubeLodEXT textureCube\n#endif\n\n#ifdef GL_FRAGMENT_PRECISION_HIGH\n    precision highp float;\n#else\n    precision mediump float;\n#endif\nprecision highp int;\nuniform \tmediump vec4 _WorldSpaceLightPos0;\nuniform \tmediump vec4 unity_SHAr;\nuniform \tmediump vec4 unity_SHAg;\nuniform \tmediump vec4 unity_SHAb;\nuniform \tvec4 unity_SpecCube0_BoxMax;\nuniform \tvec4 unity_SpecCube0_BoxMin;\nuniform \tvec4 unity_SpecCube0_ProbePosition;\nuniform \tmediump vec4 unity_SpecCube0_HDR;\nuniform \tvec4 unity_SpecCube1_BoxMax;\nuniform \tvec4 unity_SpecCube1_BoxMin;\nuniform \tvec4 unity_SpecCube1_ProbePosition;\nuniform \tmediump vec4 unity_SpecCube1_HDR;\nuniform \tmediump vec4 _LightColor0;\nuniform \tmediump vec4 _Color;\nuniform \tmediump float _Metallic;\nuniform \tfloat _Glossiness;\nuniform \tmediump float _OcclusionStrength;\nuniform \tmediump vec4 _EmissionColor;\nuniform lowp sampler2D _MainTex;\nuniform lowp sampler2D _OcclusionMap;\nuniform lowp sampler2D _EmissionMap;\nuniform lowp samplerCube unity_SpecCube0;\nuniform lowp samplerCube unity_SpecCube1;\nvarying highp vec4 vs_TEXCOORD0;\nvarying highp vec4 vs_TEXCOORD1;\nvarying highp vec4 vs_TEXCOORD4;\nvarying mediump vec4 vs_TEXCOORD5;\nvarying highp vec3 vs_TEXCOORD8;\n#define SV_Target0 gl_FragData[0]\nvec4 u_xlat0;\nlowp vec4 u_xlat10_0;\nvec4 u_xlat1;\nlowp vec3 u_xlat10_1;\nbool u_xlatb1;\nmediump vec3 u_xlat16_2;\nmediump vec3 u_xlat16_3;\nvec3 u_xlat4;\nmediump vec3 u_xlat16_5;\nlowp vec4 u_xlat10_5;\nmediump vec3 u_xlat16_6;\nlowp vec4 u_xlat10_6;\nvec3 u_xlat7;\nvec3 u_xlat8;\nvec3 u_xlat9;\nvec3 u_xlat10;\nbvec3 u_xlatb11;\nmediump vec3 u_xlat16_12;\nmediump vec4 u_xlat16_13;\nmediump vec3 u_xlat16_14;\nfloat u_xlat15;\nfloat u_xlat16;\nlowp float u_xlat10_16;\nvec3 u_xlat27;\nmediump vec3 u_xlat16_27;\nmediump float u_xlat16_28;\nfloat u_xlat30;\nfloat u_xlat31;\nmediump float u_xlat16_43;\nfloat u_xlat45;\nbool u_xlatb45;\nfloat u_xlat46;\nmediump float u_xlat16_47;\nmediump float u_xlat16_48;\nmediump float u_xlat16_50;\nmediump float u_xlat16_57;\nvoid main()\n{\n    u_xlat10_0 = texture2D(_MainTex, vs_TEXCOORD0.xy);\n    u_xlat1 = u_xlat10_0 * _Color;\n    u_xlat16_2.xyz = u_xlat10_0.xyz * _Color.xyz + vec3(-0.220916301, -0.220916301, -0.220916301);\n    u_xlat16_2.xyz = vec3(vec3(_Metallic, _Metallic, _Metallic)) * u_xlat16_2.xyz + vec3(0.220916301, 0.220916301, 0.220916301);\n    u_xlat16_47 = (-_Metallic) * 0.779083729 + 0.779083729;\n    u_xlat16_3.xyz = u_xlat1.xyz * vec3(u_xlat16_47);\n    u_xlat0.x = dot(vs_TEXCOORD4.xyz, vs_TEXCOORD4.xyz);\n    u_xlat0.x = inversesqrt(u_xlat0.x);\n    u_xlat0.xyz = u_xlat0.xxx * vs_TEXCOORD4.xyz;\n    u_xlat1.x = dot(vs_TEXCOORD1.xyz, vs_TEXCOORD1.xyz);\n    u_xlat1.x = inversesqrt(u_xlat1.x);\n    u_xlat4.xyz = u_xlat1.xxx * vs_TEXCOORD1.xyz;\n    u_xlat16_3.xyz = u_xlat1.www * u_xlat16_3.xyz;\n    u_xlat16_48 = (-u_xlat16_47) + 1.0;\n    SV_Target0.w = u_xlat1.w * u_xlat16_47 + u_xlat16_48;\n    u_xlat10_16 = texture2D(_OcclusionMap, vs_TEXCOORD0.xy).y;\n    u_xlat16_47 = (-_OcclusionStrength) + 1.0;\n    u_xlat16_47 = u_xlat10_16 * _OcclusionStrength + u_xlat16_47;\n    u_xlat16 = (-_Glossiness) + 1.0;\n    u_xlat16_5.x = dot(u_xlat4.xyz, u_xlat0.xyz);\n    u_xlat16_5.x = u_xlat16_5.x + u_xlat16_5.x;\n    u_xlat16_5.xyz = u_xlat0.xyz * (-u_xlat16_5.xxx) + u_xlat4.xyz;\n    u_xlat0.w = 1.0;\n    u_xlat16_6.x = dot(unity_SHAr, u_xlat0);\n    u_xlat16_6.y = dot(unity_SHAg, u_xlat0);\n    u_xlat16_6.z = dot(unity_SHAb, u_xlat0);\n    u_xlat16_6.xyz = u_xlat16_6.xyz + vs_TEXCOORD5.xyz;\n    u_xlat16_6.xyz = max(u_xlat16_6.xyz, vec3(0.0, 0.0, 0.0));\n    u_xlat7.xyz = log2(u_xlat16_6.xyz);\n    u_xlat7.xyz = u_xlat7.xyz * vec3(0.416666657, 0.416666657, 0.416666657);\n    u_xlat7.xyz = exp2(u_xlat7.xyz);\n    u_xlat7.xyz = u_xlat7.xyz * vec3(1.05499995, 1.05499995, 1.05499995) + vec3(-0.0549999997, -0.0549999997, -0.0549999997);\n    u_xlat7.xyz = max(u_xlat7.xyz, vec3(0.0, 0.0, 0.0));\n    u_xlatb45 = 0.0<unity_SpecCube0_ProbePosition.w;\n    if(u_xlatb45){\n        u_xlat45 = dot(u_xlat16_5.xyz, u_xlat16_5.xyz);\n        u_xlat45 = inversesqrt(u_xlat45);\n        u_xlat8.xyz = vec3(u_xlat45) * u_xlat16_5.xyz;\n        u_xlat9.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube0_BoxMax.xyz;\n        u_xlat9.xyz = u_xlat9.xyz / u_xlat8.xyz;\n        u_xlat10.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube0_BoxMin.xyz;\n        u_xlat10.xyz = u_xlat10.xyz / u_xlat8.xyz;\n        u_xlatb11.xyz = lessThan(vec4(0.0, 0.0, 0.0, 0.0), u_xlat8.xyzx).xyz;\n        {\n            vec3 hlslcc_movcTemp = u_xlat9;\n            hlslcc_movcTemp.x = (u_xlatb11.x) ? u_xlat9.x : u_xlat10.x;\n            hlslcc_movcTemp.y = (u_xlatb11.y) ? u_xlat9.y : u_xlat10.y;\n            hlslcc_movcTemp.z = (u_xlatb11.z) ? u_xlat9.z : u_xlat10.z;\n            u_xlat9 = hlslcc_movcTemp;\n        }\n        u_xlat45 = min(u_xlat9.y, u_xlat9.x);\n        u_xlat45 = min(u_xlat9.z, u_xlat45);\n        u_xlat9.xyz = vs_TEXCOORD8.xyz + (-unity_SpecCube0_ProbePosition.xyz);\n        u_xlat8.xyz = u_xlat8.xyz * vec3(u_xlat45) + u_xlat9.xyz;\n    } else {\n        u_xlat8.xyz = u_xlat16_5.xyz;\n    }\n    u_xlat16_50 = (-u_xlat16) * 0.699999988 + 1.70000005;\n    u_xlat16_50 = u_xlat16 * u_xlat16_50;\n    u_xlat16_50 = u_xlat16_50 * 6.0;\n    u_xlat10_6 = textureCubeLodEXT(unity_SpecCube0, u_xlat8.xyz, u_xlat16_50);\n    u_xlat16_12.x = u_xlat10_6.w + -1.0;\n    u_xlat16_12.x = unity_SpecCube0_HDR.w * u_xlat16_12.x + 1.0;\n    u_xlat16_12.x = u_xlat16_12.x * unity_SpecCube0_HDR.x;\n    u_xlat16_27.xyz = u_xlat10_6.xyz * u_xlat16_12.xxx;\n    u_xlatb45 = unity_SpecCube0_BoxMin.w<0.999989986;\n    if(u_xlatb45){\n        u_xlatb45 = 0.0<unity_SpecCube1_ProbePosition.w;\n        if(u_xlatb45){\n            u_xlat45 = dot(u_xlat16_5.xyz, u_xlat16_5.xyz);\n            u_xlat45 = inversesqrt(u_xlat45);\n            u_xlat8.xyz = vec3(u_xlat45) * u_xlat16_5.xyz;\n            u_xlat9.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube1_BoxMax.xyz;\n            u_xlat9.xyz = u_xlat9.xyz / u_xlat8.xyz;\n            u_xlat10.xyz = (-vs_TEXCOORD8.xyz) + unity_SpecCube1_BoxMin.xyz;\n            u_xlat10.xyz = u_xlat10.xyz / u_xlat8.xyz;\n            u_xlatb11.xyz = lessThan(vec4(0.0, 0.0, 0.0, 0.0), u_xlat8.xyzx).xyz;\n            {\n                vec3 hlslcc_movcTemp = u_xlat9;\n                hlslcc_movcTemp.x = (u_xlatb11.x) ? u_xlat9.x : u_xlat10.x;\n                hlslcc_movcTemp.y = (u_xlatb11.y) ? u_xlat9.y : u_xlat10.y;\n                hlslcc_movcTemp.z = (u_xlatb11.z) ? u_xlat9.z : u_xlat10.z;\n                u_xlat9 = hlslcc_movcTemp;\n            }\n            u_xlat45 = min(u_xlat9.y, u_xlat9.x);\n            u_xlat45 = min(u_xlat9.z, u_xlat45);\n            u_xlat9.xyz = vs_TEXCOORD8.xyz + (-unity_SpecCube1_ProbePosition.xyz);\n            u_xlat8.xyz = u_xlat8.xyz * vec3(u_xlat45) + u_xlat9.xyz;\n        } else {\n            u_xlat8.xyz = u_xlat16_5.xyz;\n        }\n        u_xlat10_5 = textureCubeLodEXT(unity_SpecCube1, u_xlat8.xyz, u_xlat16_50);\n        u_xlat16_13.x = u_xlat10_5.w + -1.0;\n        u_xlat16_13.x = unity_SpecCube1_HDR.w * u_xlat16_13.x + 1.0;\n        u_xlat16_13.x = u_xlat16_13.x * unity_SpecCube1_HDR.x;\n        u_xlat16_13.xyz = u_xlat10_5.xyz * u_xlat16_13.xxx;\n        u_xlat8.xyz = u_xlat16_12.xxx * u_xlat10_6.xyz + (-u_xlat16_13.xyz);\n        u_xlat27.xyz = unity_SpecCube0_BoxMin.www * u_xlat8.xyz + u_xlat16_13.xyz;\n        u_xlat16_27.xyz = u_xlat27.xyz;\n    }\n    u_xlat16_12.xyz = vec3(u_xlat16_47) * u_xlat16_27.xyz;\n    u_xlat1.xzw = (-vs_TEXCOORD1.xyz) * u_xlat1.xxx + _WorldSpaceLightPos0.xyz;\n    u_xlat45 = dot(u_xlat1.xzw, u_xlat1.xzw);\n    u_xlat45 = max(u_xlat45, 0.00100000005);\n    u_xlat45 = inversesqrt(u_xlat45);\n    u_xlat1.xzw = vec3(u_xlat45) * u_xlat1.xzw;\n    u_xlat45 = dot(u_xlat0.xyz, (-u_xlat4.xyz));\n    u_xlat4.x = dot(u_xlat0.xyz, _WorldSpaceLightPos0.xyz);\n    u_xlat4.x = clamp(u_xlat4.x, 0.0, 1.0);\n    u_xlat0.x = dot(u_xlat0.xyz, u_xlat1.xzw);\n    u_xlat0.x = clamp(u_xlat0.x, 0.0, 1.0);\n    u_xlat15 = dot(_WorldSpaceLightPos0.xyz, u_xlat1.xzw);\n    u_xlat15 = clamp(u_xlat15, 0.0, 1.0);\n    u_xlat16_57 = u_xlat15 + u_xlat15;\n    u_xlat16_57 = u_xlat15 * u_xlat16_57;\n    u_xlat16_57 = u_xlat16_57 * u_xlat16 + -0.5;\n    u_xlat16_13.x = (-u_xlat4.x) + 1.0;\n    u_xlat16_28 = u_xlat16_13.x * u_xlat16_13.x;\n    u_xlat16_28 = u_xlat16_28 * u_xlat16_28;\n    u_xlat16_13.x = u_xlat16_13.x * u_xlat16_28;\n    u_xlat16_13.x = u_xlat16_57 * u_xlat16_13.x + 1.0;\n    u_xlat16_28 = -abs(u_xlat45) + 1.0;\n    u_xlat16_43 = u_xlat16_28 * u_xlat16_28;\n    u_xlat16_43 = u_xlat16_43 * u_xlat16_43;\n    u_xlat16_28 = u_xlat16_28 * u_xlat16_43;\n    u_xlat16_57 = u_xlat16_57 * u_xlat16_28 + 1.0;\n    u_xlat16_57 = u_xlat16_57 * u_xlat16_13.x;\n    u_xlat30 = u_xlat4.x * u_xlat16_57;\n    u_xlat1.x = u_xlat16 * u_xlat16;\n    u_xlat1.x = max(u_xlat1.x, 0.00200000009);\n    u_xlat31 = (-u_xlat1.x) + 1.0;\n    u_xlat46 = abs(u_xlat45) * u_xlat31 + u_xlat1.x;\n    u_xlat31 = u_xlat4.x * u_xlat31 + u_xlat1.x;\n    u_xlat45 = abs(u_xlat45) * u_xlat31;\n    u_xlat45 = u_xlat4.x * u_xlat46 + u_xlat45;\n    u_xlat45 = u_xlat45 + 9.99999975e-06;\n    u_xlat45 = 0.5 / u_xlat45;\n    u_xlat31 = u_xlat1.x * u_xlat1.x;\n    u_xlat46 = u_xlat0.x * u_xlat31 + (-u_xlat0.x);\n    u_xlat0.x = u_xlat46 * u_xlat0.x + 1.0;\n    u_xlat31 = u_xlat31 * 0.318309873;\n    u_xlat0.x = u_xlat0.x * u_xlat0.x + 1.00000001e-07;\n    u_xlat0.x = u_xlat31 / u_xlat0.x;\n    u_xlat0.x = u_xlat0.x * u_xlat45;\n    u_xlat0.x = u_xlat0.x * 3.14159274;\n    u_xlat0.x = max(u_xlat0.x, 9.99999975e-05);\n    u_xlat0.x = sqrt(u_xlat0.x);\n    u_xlat0.x = u_xlat4.x * u_xlat0.x;\n    u_xlat45 = u_xlat1.x * u_xlat16;\n    u_xlat45 = (-u_xlat45) * 0.280000001 + 1.0;\n    u_xlat16_57 = dot(u_xlat16_2.xyz, u_xlat16_2.xyz);\n    u_xlatb1 = u_xlat16_57!=0.0;\n    u_xlat1.x = u_xlatb1 ? 1.0 : float(0.0);\n    u_xlat0.x = u_xlat0.x * u_xlat1.x;\n    u_xlat16_48 = u_xlat16_48 + _Glossiness;\n    u_xlat16_48 = clamp(u_xlat16_48, 0.0, 1.0);\n    u_xlat16_13.xzw = vec3(u_xlat30) * _LightColor0.xyz;\n    u_xlat16_13.xzw = u_xlat7.xyz * vec3(u_xlat16_47) + u_xlat16_13.xzw;\n    u_xlat1.xyz = u_xlat0.xxx * _LightColor0.xyz;\n    u_xlat16_47 = (-u_xlat15) + 1.0;\n    u_xlat16_57 = u_xlat16_47 * u_xlat16_47;\n    u_xlat16_57 = u_xlat16_57 * u_xlat16_57;\n    u_xlat16_47 = u_xlat16_47 * u_xlat16_57;\n    u_xlat16_14.xyz = (-u_xlat16_2.xyz) + vec3(1.0, 1.0, 1.0);\n    u_xlat16_14.xyz = u_xlat16_14.xyz * vec3(u_xlat16_47) + u_xlat16_2.xyz;\n    u_xlat0.xyz = u_xlat1.xyz * u_xlat16_14.xyz;\n    u_xlat0.xyz = u_xlat16_3.xyz * u_xlat16_13.xzw + u_xlat0.xyz;\n    u_xlat16_3.xyz = u_xlat16_12.xyz * vec3(u_xlat45);\n    u_xlat16_12.xyz = (-u_xlat16_2.xyz) + vec3(u_xlat16_48);\n    u_xlat16_2.xyz = vec3(u_xlat16_28) * u_xlat16_12.xyz + u_xlat16_2.xyz;\n    u_xlat0.xyz = u_xlat16_3.xyz * u_xlat16_2.xyz + u_xlat0.xyz;\n    u_xlat10_1.xyz = texture2D(_EmissionMap, vs_TEXCOORD0.xy).xyz;\n    SV_Target0.xyz = u_xlat10_1.xyz * _EmissionColor.xyz + u_xlat0.xyz;\n    return;\n}\n\n"]