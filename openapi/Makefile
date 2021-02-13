OUT_DIR=./gen

PROTOC=protoc \
	-I ../proto/ \
	-I ../proto/wechaty/ \
	-I ${OUT_DIR} \
	../proto/wechaty/puppet.proto \

.PHONY: all
all: clean generate reverse_proxy_server

.PHONY: clean
clean:
	rm -fr ${OUT_DIR}/*

.PHONY: install
install:
	[ -d ${OUT_DIR} ] || mkdir ${OUT_DIR}
	[ -e ${OUT_DIR}/google/api } || mkdir -p ${OUT_DIR}/google/api
	curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/annotations.proto > ${OUT_DIR}/google/api/annotations.proto
	curl https://raw.githubusercontent.com/googleapis/googleapis/master/google/api/http.proto > ${OUT_DIR}/google/api/http.proto

	go install \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-grpc-gateway \
		github.com/grpc-ecosystem/grpc-gateway/v2/protoc-gen-openapiv2 \
		google.golang.org/protobuf/cmd/protoc-gen-go \
		google.golang.org/grpc/cmd/protoc-gen-go-grpc
	go mod tidy

.PHONY: generate
generate: gen_protobuf gen_gateway gen_openapi

.PHONY: gen_protobuf
gen_protobuf:
	${PROTOC} \
		--go_out ${OUT_DIR} --go_opt paths=source_relative \
		--go-grpc_out ${OUT_DIR} --go-grpc_opt paths=source_relative \

.PHONY: gen_gateway
gen_gateway:
	${PROTOC} \
		--grpc-gateway_out ${OUT_DIR} \
		--grpc-gateway_opt logtostderr=true \
		--grpc-gateway_opt paths=source_relative \
		--grpc-gateway_opt generate_unbound_methods=true \

.PHONY: gen_openapi
gen_openapi:
	${PROTOC} \
		--openapiv2_out ${OUT_DIR} \
		--openapiv2_opt logtostderr=true \
		--openapiv2_opt generate_unbound_methods=true \

