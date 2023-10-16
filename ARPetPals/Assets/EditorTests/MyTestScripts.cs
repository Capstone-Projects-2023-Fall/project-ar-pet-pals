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
        string sceneName = "MainScene"; // Replace with your scene name
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

    // [Test]
    // public void CanInstantiatePrefab()
    // {
    //     string prefabPath = "Assets/Prefabs/MyPrefab.prefab"; // Replace with your prefab path
    //     GameObject prefab = Resources.Load<GameObject>(prefabPath);

    //     Assert.IsNotNull(prefab, $"Prefab at '{prefabPath}' could not be loaded.");

    //     GameObject instance = Object.Instantiate(prefab);
    //     Assert.IsNotNull(instance, $"Prefab at '{prefabPath}' could not be instantiated.");

    //     Object.DestroyImmediate(instance);
    // }

    // [UnityTest]
    // public IEnumerator GameObjectExistsInScene()
    // {
    //     string sceneName = "MainScene"; // Replace with your scene name
    //     string gameObjectName = "Dog"; // Replace with your game object name

    //     SceneManager.LoadScene(sceneName);
    //     yield return null; // Wait for the scene to load

    //     GameObject obj = GameObject.Find(gameObjectName);
    //     Assert.IsNotNull(obj, $"Game object '{gameObjectName}' does not exist in scene '{sceneName}'.");
    // }
}
