using System.Collections;
using System.Collections.Generic;
using NUnit.Framework;
using UnityEngine;
using UnityEngine.SceneManagement;
using UnityEngine.TestTools;

public class MyTestScripts
{
    // A Test behaves as an ordinary method
    [Test]
    public void MyTestScriptsSimplePasses()
    {
        // Use the Assert class to test conditions

        Assert.AreEqual(1, 1);
    }

    // A UnityTest behaves like a coroutine in Play Mode. In Edit Mode you can use
    // `yield return null;` to skip a frame.
    [UnityTest]
    public IEnumerator MyTestScriptsWithEnumeratorPasses()
    {
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

    [Test]
    public void SceneExistsInBuildSettings()
    {
        string sceneName = "MainScene";
        bool sceneExists = false;

        for (int i = 0; i < SceneManager.sceneCountInBuildSettings; i++)
        {
            string scenePath = SceneUtility.GetScenePathByBuildIndex(i);
            if (System.IO.Path.GetFileNameWithoutExtension(scenePath) == sceneName)
            {
                sceneExists = true;
                break;
            }
        }

        Assert.IsTrue(sceneExists, $"Scene '{sceneName}' does not exist in build settings.");
    }
}
