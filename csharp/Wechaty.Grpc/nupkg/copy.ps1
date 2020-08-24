
# copy wechaty grpc proto  to csharp  solution

$currentFolder = (Get-Item -Path "./" -Verbose).FullName

$projectFolder=(Get-Item -Path "../../../" -Verbose).FullName


if(Test-Path "C:\Darren\github\wechaty\grpc\csharp\Wechaty.Grpc\proto")
{
  Remove-Item -Path "C:\Darren\github\wechaty\grpc\csharp\Wechaty.Grpc\proto" -Recurse -Force
}

Copy-Item "C:\Darren\github\wechaty\grpc\proto" "C:\Darren\github\wechaty\grpc\csharp\Wechaty.Grpc\" -Recurse






