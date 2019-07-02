const allergy = {
    "name": "Allergy",
    "plural": "allergy",
    "base": "PersistedModel",
    "idInjection": true,
    "options": {
      "validateUpsert": true
    },
    "properties": {
      "name": {
        "type": "string",
        "required": true
      },
  
      "type": {
        "type": "string",
        "required": true
      }
    },
    "validations": [],
    "relations": {},
    "acls": [],
    "methods": {}
  }