# C\# Development Notes

## .NET and C# Guides and Documentation

1. [.NET](https://dotnet.microsoft.com/)
2. [C# Guide](https://docs.microsoft.com/en-us/dotnet/csharp/)
3. [C# Language Primer](https://docs.microsoft.com/en-us/previous-versions/visualstudio/visual-studio-2008/zkxk2fwf(v=vs.90))

### Uninstall .NET

:link: [.NET uninstall tool](https://learn.microsoft.com/en-gb/dotnet/core/additional-tools/uninstall-tool)

### .NET Documentation

- [.NET fundamentals documentation](https://aka.ms/dotnet-docs)
- [.NET SDK documentation](https://aka.ms/dotnet-sdk-docs)
- [Learn .NET and the .NET SDK tools](https://aka.ms/dotnet-tutorials)

## VS Code

- [Working with C#](https://code.visualstudio.com/docs/languages/csharp)
- [Using .NET Core in Visual Studio Code](https://code.visualstudio.com/docs/languages/dotnet)
- [Tutorial: Create a .NET Core console application using Visual Studio Code](https://docs.microsoft.com/en-us/dotnet/core/tutorials/with-visual-studio-code)

## Mono

- [Mono Project](https://www.mono-project.com/) for mobile development
- [MonoDevelop](https://www.monodevelop.com/) IDE

## Troubleshoot and Issue Fixes

Migrate code to the latest Dotnet version

```cmd
dotnet tool install --global Project2015To2017.Migrate2019.Tool --ignore-failed-sources
dotnet migrate-2019 wizard path
```
