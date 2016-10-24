# Reuters Link Resolver for MixMax

This is an open source Mixmax Link Resolver. See <http://sdk.mixmax.com/docs/> for more information

It interfaces with the smmry API to produce a summary of the most important sentences in a given article by ranking setnences by importance, removing transition phrases, removing unnecessary clauses, and removing excessive examples. Learn more about how smmry produces it's output at <http://smmry.com/about>

## Running locally

1. Install using `npm install`
2. Run using `npm start`

To simulate locally how Mixmax calls the resolver URL (to return HTML that goes into the email), run:

```
curl http://localhost:9146/resolver?url=http%3A%2F%2Fwww.reuters.com%2Farticle%2Fus-usa-election-millennials-idUSKCN12O1X8
```

To make a call against the Heroku instance, run:

'''
https://infinite-reef-62178.herokuapp.com/resolver?url=http%3A%2F%2Fwww.reuters.com%2Farticle%2Fus-usa-election-millennials-idUSKCN12O1X8
'''