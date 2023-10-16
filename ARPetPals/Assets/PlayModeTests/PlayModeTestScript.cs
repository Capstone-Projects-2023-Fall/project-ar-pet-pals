using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

public class PlayModeTestScript
{
    [Test]
    public void MyTestScriptsSimplePasses() {
        // Use the Assert class to test conditions

        Assert.AreEqual(1, 1);
    }

    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator MyTestScriptsWithEnumeratorPasses() {
        // Use the Assert class to test conditions.
        // Use yield to skip a frame.
        yield return null;
    }
    [Test]
    public void TestEqualNum() {
        Assert.AreEqual(1, 1);
    }
    [Test]
    public void TestNotEqualNum() {
        Assert.AreNotEqual(1, 2);
    }

    [UnityTest]
    public IEnumerator GameObjectExistsInScene()
    {
        string sceneName = "MainScene";
        string gameObjectName = "Main Camera";

        SceneManager.LoadScene(sceneName);
        yield return null; // Wait for the scene to load

        // Uncomment to debug test
        // // List all game objects in the scene
        // GameObject[] allGameObjects = GameObject.FindObjectsOfType<GameObject>();
        // foreach (GameObject go in allGameObjects)
        // {
        //     Debug.Log(go.name);
        // }

        GameObject obj = GameObject.Find(gameObjectName);
        Assert.IsNotNull(obj, $"Game object '{gameObjectName}' does not exist in scene '{sceneName}'.");

    }


}
