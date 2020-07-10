# Makefile for PHP Wechaty
#
# 	GitHb: https://github.com/wechaty/php-wechaty
# 	Author: Chunsheng Zhang <zhangchunsheng423@gmail.com> https://git.io/JJmKd
#

.PHP: all
all : clean lint

.PHP: clean
clean:
	rm -fr generated/*

.PHP: test
test:
	bash -x ./generate.sh
	php grpc_test.php

.PHP: generate
generate:
	bash -x ./generate.sh

.PHP: publish
publish: clean generate
	./publish.sh

