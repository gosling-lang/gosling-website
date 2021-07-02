export class CustomHighlightRules extends window.ace.acequire("ace/mode/text_highlight_rules").TextHighlightRules {
    constructor() {
      super();
      this.$rules = {
        start: [
          {
            token: "keyword",
            regex: "def"
          }
        ]
      };
    }
  }