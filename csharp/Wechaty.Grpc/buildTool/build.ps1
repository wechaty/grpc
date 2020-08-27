. ".\common.ps1"

Set-Location $solutionFolder

$releasePath = Join-Path $solutionFolder "bin/Release"
if(Test-Path $releasePath)
{
    Remove-Item -Recurse $releasePath
}

dotnet restore
& dotnet msbuild /t:pack /p:Configuration=Release /p:SourceLinkCreate=true


# from bin\Release to nupkg catalog
$nugetPackagePath = Join-Path $solutionFolder ("/bin/Release/Wechaty.Grpc.*.nupkg")
Move-Item $nugetPackagePath $packageFolder

Set-Location $buildFolder
