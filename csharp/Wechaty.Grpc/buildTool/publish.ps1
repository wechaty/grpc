. ".\common.ps1"

$apiKey = $args[0]

$packageFile=Join-Path $packageFolder ("Wechaty.Grpc."+ $version + ".nupkg")

dotnet nuget push $packageFile -s https://api.nuget.org/v3/index.json --api-key "$apiKey"

Set-Location $buildFolder
