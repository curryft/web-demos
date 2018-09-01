export const mixinTest = {
    created() {
        this.hello();
    },
    methods: {
        hello() {
            alert(1)
        },
        aa(){
            alert(2)
        }
    }
};
