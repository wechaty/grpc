<?php
define("ROOT", __DIR__);

function autoload($clazz) {
    $file = str_replace('\\', '/', $clazz);
    if(is_file(ROOT . "/generated/wechaty/$file.php")) {
        require ROOT . "/generated/wechaty/$file.php";
    } else {
        $file = str_replace('\\', '/', $clazz);
        if(is_file("/usr/share/pear/$file.php")) {
            require "/usr/share/pear/$file.php";
        }
    }
}

spl_autoload_register("autoload");

$client = new \Wechaty\PuppetClient("localhost", [
  'credentials' => Grpc\ChannelCredentials::createInsecure()
]);
$client->Version(null);
