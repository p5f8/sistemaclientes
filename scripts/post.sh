curl -X POST \
     -w'\n' \
     -H "Content-Type: application/json" \
     http://localhost:8080/v1/api/clientes \
     --data '{ "id" : 12, "nome": "Pablo Çilva", "celular": "11-9xxxx-xxxx" }'


