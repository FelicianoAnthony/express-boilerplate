## How to run
    1. npm install
    2. npm run dev (hot reload) or npm run express (start express in debug mode)

## HTTP request for Postman
    -  GET http://localhost:8081/api/transactions


## EXPRESS API DATA FLOW (set breakpoints in getAll function in each file)
    1. \middleware\auth.ts
    2. \routes\index.ts
    2. \routes\transactions.route.ts
    3. \controllers\transactions.controller.ts
    4. \services\transactions.service.ts
    5. \repository\transactions.repository.ts
        - reads from /data/transactions.ts file