. ".\common.ps1"

Set-Location $solutionFolder

$releasePath = Join-Path $solutionFolder "bin/Release"
if(Test-Path $releasePath)
{
    Remove-Item -Recurse $releasePath
}

# update common.props version as package.json version
$commonPropPath = Join-Path $solutionFolder "common.props"
$commonPropsData = Get-Content $commonPropPath

$versionNode="<Version>" + $version + "</Version>"
$commonPropsData -Replace "<Version>(.*)</Version>" , $versionNode | set-Content $commonPropPath

dotnet restore
& dotnet msbuild /t:pack /p:Configuration=Release /p:SourceLinkCreate=true


# from bin\Release to nupkg catalog
$nugetPackagePath = Join-Path $solutionFolder ("/bin/Release/Wechaty.Grpc.*.nupkg")
Move-Item $nugetPackagePath $packageFolder

Set-Location $buildFolder
