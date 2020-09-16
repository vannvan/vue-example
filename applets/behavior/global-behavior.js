module.exports = Behavior({
  behaviors: [],
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){
    console.log('相当于mixin的作用')
  },
  methods: {
    myBehaviorMethod: function(){}
  }
})