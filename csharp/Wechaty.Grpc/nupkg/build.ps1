. ".\common.ps1"


$solutionFolder = Join-Path $rootFolder $solution
    Set-Location $solutionFolder
    & dotnet restore
