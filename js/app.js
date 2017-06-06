new Vue({
    el: '#app',
    data: {
        php: 100,
        mhp: 100
        
    },
    computed:{},

    methods: {


        giveup: function(){
            this.php = 0;
        },
        start_new : function(){
            this.php = 100;
            this.mhp = 100;
        },
        player_super_attack: function(){
            if(this.mhp > 0 && this.mhp <= 100){
                this.mhp -= 50;
            }
        },     
        player_attack: function(){
            if(this.mhp > 0 && this.mhp <= 100){
                this.mhp -= 20;
            }
           
            // var vm = this;
            // setInterval(function(){
            //     vm.hp -= 20;
            // }, 1000);
        },
        heal: function(){
            if(this.php < 100){
                this.php += 20;
            }
        },
        monster_super_attack: function(){
            if(this.php > 0 && this.php <= 100){
                this.php -= 50;
            }
        },
        monster_attack: function(){
            if(this.php > 0 && this.php <= 100){
                this.php -= 20;
            }
        }
    },
    watch: {
        mhp: function(){
            var vm = this;
            setInterval(function(){
                vm.monster_attack();
            }, 5000);
            
        }
    }
});