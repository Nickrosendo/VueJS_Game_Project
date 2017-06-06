new Vue({
    el: '#my_hp',
    data: {
        hp: 100
    },
    methods: {
        loose_hp: function(){
            var vm = this;
            setInterval(function(){
                vm.hp -= 20;
            }, 1000);
        }
    }

});