using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Storelink : MonoBehaviour
{
    // Start is called before the first frame update
    public void PressLinkGame()
    {
        //#if UNITY_ANDROID
        //        Application.OpenURL("market://details?id=com.mori.mergetoy.master");
        //#elif UNITY_IOS
        //            Application.OpenURL("itms-apps://itunes.apple.com/app/id1633811187");
        //#endif
        Luna.Unity.Playable.InstallFullGame();
        Luna.Unity.LifeCycle.GameEnded();
    }
}
