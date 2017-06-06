new Vue({
    el: '#app',
    data: {
        hp: 100
    },
    methods: {
        start : function(){
            console.log("Game Start");
        },
        attack: function(){
            this.hp -= 20;
            // var vm = this;
            // setInterval(function(){
            //     vm.hp -= 20;
            // }, 1000);
        },
        heal: function(){
            this.hp += 20;
            // var vm = this;
            // setInterval(function(){
            //     vm.hp += 20;
            // }, 1000);
        }

    }
});