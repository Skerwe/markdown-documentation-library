# HaxeFlixel Game Development

## Installation

This is the order in which to install the components:

1. [Haxe Toolkit](https://haxe.org/)
2. [OpenFL](https://www.openfl.org/)
3. [HaxeDevelop IDE](https://haxedevelop.org/)
4. [HaxeFlixel](https://haxeflixel.com/)

### Additional Links

- [Haxe Library Manager](https://lib.haxe.org/)

## Install Commands

1. Download and install Haxe
2. Install OpenFL
   1. `haxelib install openfl`
   2. `haxelib -notimeout run openfl setup`
3. Setup an IDE (VS Code or HaxeDevelop)
4. Install HaxeFlixel
   1. `haxelib install lime`
   2. `haxelib run lime setup`
   3. `haxelib install flixel`
   4. `haxelib run lime setup flixel`
   5. `haxelib install flixel-tools`
   6. `haxelib run flixel-tools setup`
5. Install [Adobe Flash debugger](https://www.adobe.com/support/flashplayer/debug_downloads.html) for IE, Chrome, Opera and Firefox

    For Internet Explorer, use the ActiveX plugin  
    For Firefox and Safari, use the NPAPI plugin  
    For Chrome, use the PPAPI plugin

## Optional Addons

1. `haxelib install flixel-addons`

## Install Platforms

### Android Platform

1. Install Java
2. Install Android SDK (API 19) and Platform-Tools
3. `openfl setup android`

Android SDK installation directories:  
`C:\Users\<username>\AppData\Local\Android\sdk`  
`C:\Users\<username>\AppData\Local\Android\sdk\ndk-bundle`

### Windows Platform

`openfl setup windows`

## Working with the CLI

Create a new project:  
`flixel tpl -n "ProjectName"`

Create a build and run the project:  
`lime test <platform>`

Build for production:  
`lime build <platform> -release`

### Platforms

- flash
- html5
- windows
- android
- mac
- ios
