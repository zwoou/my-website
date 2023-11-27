---
sidebar_position: 1
---

# grade基础01

## 配置文件 build.gradle

### 构建脚本的外部依赖项 buildscript

```GROOVY
buildscript {
    repositories {
        mavenCentral()
    }
    dependencies {
        classpath group: 'commons-codec', name: 'commons-codec', version: '1.2'
    }
}
```

### ext 自定义属性

Gradle 域对象的附加、临时属性。

额外的属性扩展允许将新属性添加到现有的域对象中。它们就像映射一样，允许存储任意键/值对。所有ExtensionAwareGradle 域对象本质上都有一个名为“ ext”的这种类型的扩展。

### 声明存储库

```GROOVY
repositories {
    mavenCentral()
    maven {
        url "https://repo.spring.io/release"
    }
    maven {
        url "https://repository.jboss.org/maven2"
    }
}
```

- url 自定义存储库

### apply from 应用脚本插件
