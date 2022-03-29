const { graphqlTestCall } = require( "./graphqlTestCall");

const getAllDepositByAccountIdQuery = `
  query getAllDepositByAccountId($account_id: ID!) {
    getAllDepositByAccountId(account_id: $account_id) {
      id,
      account_id,
      commitment,
      market,
      net_amount,
      net_accrued_yield
    }
  }
`;

const getAllLoanByAccountIdQuery = `
query getAllLoanByAccountId($account_id: ID!) {
  getAllLoanByAccountId(account_id: $account_id) {
    id,
    loan_market,
    loan_amount,
    collateral_market,
    collateral_amount,
    commitment,
    cdr,
    debt_category,
    current_amount,
    current_market,
    is_swapped,
    loan_status_id,
    account_id,
  }
}
`

describe("resolvers", () => {
  it("query and mutation tests", async () => {
    
    //Test for QUERY: getAllDepositByAccountId
    const getAllDepositByAccountIdData = await graphqlTestCall(getAllDepositByAccountIdQuery, { account_id: "a731640c-5b22-496b-86fc-85e630b2155a"});
  
    expect(getAllDepositByAccountIdData).toEqual({
      "data": {
        "getAllDepositByAccountId": [
          {
            "id": "5543ad1d-ddee-4328-b9ff-f1ce4ea9a6b3",
            "account_id": "a731640c-5b22-496b-86fc-85e630b2155a",
            "commitment": "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
            "market": "0x555344542e740000000000000000000000000000000000000000000000000000",
            "net_amount": 100,
            "net_accrued_yield": 0.54
          },
          {
            "id": "84cd8838-afeb-42aa-a776-b9021e6a38a4",
            "account_id": "a731640c-5b22-496b-86fc-85e630b2155a",
            "commitment": "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
            "market": "0x555344432e740000000000000000000000000000000000000000000000000000",
            "net_amount": 500,
            "net_accrued_yield": 0.454
          },
          {
            "id": "6ec212aa-e1dc-4c55-9a05-9f17c2e06e95",
            "account_id": "a731640c-5b22-496b-86fc-85e630b2155a",
            "commitment": "0x636f6d69745f54574f5745454b53000000000000000000000000000000000000",
            "market": "0x555344542e740000000000000000000000000000000000000000000000000000",
            "net_amount": 200,
            "net_accrued_yield": 0.54
          },
          {
            "id": "16c2ec38-aa8e-4793-ba2d-0d0879cd3efa",
            "account_id": "a731640c-5b22-496b-86fc-85e630b2155a",
            "commitment": "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
            "market": "0x555344542e740000000000000000000000000000000000000000000000000000",
            "net_amount": 100,
            "net_accrued_yield": 0.54
          }
        ]
      }
    });

    //Test for QUERY: getAllLoanByAccountId
    const getAllLoanByAccountIdData = await graphqlTestCall(getAllLoanByAccountIdQuery, { account_id: "f554c8f6-06e6-4386-88b9-59047adb6365"});
  
    expect(getAllLoanByAccountIdData).toEqual({
      data: {
        getAllLoanByAccountId: [
          {
            id: "16c2ec38-aa8e-4793-bbbb-0d0879cd3eaa",
            loan_market: "0x555344542e740000000000000000000000000000000000000000000000000000",
            loan_amount: 300000000000000000000,
            collateral_market: "0x555344542e740000000000000000000000000000000000000000000000000000",
            collateral_amount: 200000000000000000000,
            commitment: "0x636f6d69745f4e4f4e4500000000000000000000000000000000000000000000",
            cdr: 0.66666,
            debt_category: 2,
            current_amount: 300000000000000000000,
            current_market: "0x555344542e740000000000000000000000000000000000000000000000000000",
            is_swapped: false,
            loan_status_id: "2",
            account_id: "f554c8f6-06e6-4386-88b9-59047adb6365"
          }
        ]
      }
    });

  }, 30000);
});