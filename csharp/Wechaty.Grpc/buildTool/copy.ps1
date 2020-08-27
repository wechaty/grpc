. ".\common.ps1"


# Get-ChildItem $projectFolder | ?{$_.psiscontainer -eq $false} 

Set-Location $buildFolder

# csharp wechaty proto folder
$csharpProtoFolder=Join-Path $solutionFolder "proto"

# if csharp proto folder is exists, delete if exists
if(Test-Path $csharpProtoFolder)
{
  Remove-Item -Path $csharpProtoFolder -Recurse -Force
}

# copy wechaty proto folder to  csharp proto folder
Copy-Item $wechatyProtoFolder $solutionFolder -Recurse

$puppetFilePath = Join-Path $csharpProtoFolder "wechaty/puppet.proto"
# get puppet.proto content
$file = Get-Content $puppetFilePath

# update import as csharp catalog
$file.Replace("import public `"puppet/","import public `"proto/wechaty/puppet/")  | set-Content $puppetFilePath

Set-Location $buildFolder





