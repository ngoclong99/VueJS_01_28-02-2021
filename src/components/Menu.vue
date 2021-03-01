<template>
    <div class="hello">
        <!-- VD 1 -->
        <div>
            VD1:
            <!--" v-model "Có nhiệm vụ là liên kết ( nó gắn DL của thẻ chứa nó VỚI biên đã khai báo ở đối tượng ) -->
            <input type="text" v-model="name" />
            <input type="text" v-model="array[1]" />
            <input type="text" v-model="obj.age" />

            <input type="checkbox" v-model="check" />
        </div>
        <div>
            <!-- binding dữ liệu từ data() -> name : Dữ liệu -->
            {{ name }}
        </div>
        <div>
            <!-- binding dữ liệu từ data() -> name : Dữ liệu -->
            {{ array[1] }}<br />
            {{ obj.age }}<br />
            {{ name }}
        </div>

        <br />
        <hr />
        <br />

        <!-- VD 2 -->
        <div>
            VD2:
            <div v-show="isShow">
                Long Đại Ca
            </div>
            <!-- Trong vue @tên Event để thêm sự kiện @click="Xử lý sự kiện" -->
            <button @click="isShow = !isShow">
                Clicks on
            </button>
        </div>

        <br />
        <hr />
        <br />

        <!-- VD 3 dùng v-bind : [tên thuộc tính] = "thuộc tính id" -->
        <!-- v-bind được dùng để gán giá trị cho thuộc tính -->
        <!-- v-bind có thể được viết :[tên thuộc tính] = "thuộc tính id" -->
        <div>
            VD3:
            <div v-bind:id="id">
                Long Đại Ca 1
            </div>
            <div :id="id">
                Long Đại ca 2
            </div>
        </div>

        <br />
        <hr />
        <br />

        <!-- binding với class -->
        <div>
            VD4:
            <div
                :class="{
                    red: color,
                    fontSize: font,
                }"
            >
                Long Đại ca 2
            </div>
        </div>

        <br />
        <hr />
        <br />

        <!-- VD 5-->
        <!-- key là thuộc tính bắt buộc để XĐ mỗi task trong tasks -->
        <div v-for="(task, index) in tasks" :key="index">
            {{ task.name }}
        </div>
        <button @click="addTask(event)">
            Add
        </button>

        <br />
        <hr />
        <br />

        <!-- VD 6-->
        <div>F12 để theo dõi thay đổi </div>
        <input type="text" v-model="newValue">

        <!-- VD 7  có component con là MenuCon.vue -->
        <br>
        <hr>
        <MenuCon v-for="(task,index) in tasks" :key="index" :createProps = "task"></MenuCon>

        <!-- VD 8 -->
        <br>
        <hr>
        <div>
            {{tongTien | xuLyTien}}
        </div>
    </div>
</template>

<script>
import MenuCon from "./MenuCon.vue"

export default {

    components: {
        MenuCon
    },
    // Hàm này trả về DL
    data() {
        // Nội dung trong này trả về "đối tượng": property & method
        return {
            // VD 1
            name: "Long",
            array: ["Long1", "Long2"],
            obj: {
                name: "Long",
                age: 21,
            },
            check: true,
            // VD 2
            isShow: true,
            //VD 3
            id: "Long",
            // VD 4
            color: true,
            font: true,
            // VD 5
            tasks: [
                {
                    name: "long1",
                    age: 1,
                },
                {
                    name: "long3",
                    age: 2,
                },
                {
                    name: "long2",
                    age: 3,
                },
            ],
            // VD 6
            newValue: "",
            // VD 8
            tongTien: 100000,
        };
    },
    // Filter
    filters: {
        xuLyTien: function(soTien){
            return soTien/2;
        }
    },
    // Method
    methods: {
        addTask: function() {
            this.tasks.push({
                name: "add Long",
                age: false,
            });
        },
    },
    // Watch
    // NGhĩa là khi data: {} thay đổi thì hàm này thực thi
    watch: {
        newValue: function(dlCu, dlMoi) {
            console.log(dlCu, dlMoi);
        },
    },
    // Hàm này chạy đầu tiên 
    // Dùng gọi API
    mounted: {
        // Tìm hiểu sau
    }


    // life Cycle :
    // Những hàm trong life Cycle ( tham khảo hình ảnh gu gồ life Cycle vue)
    // VD hàm này xảy ra trc khi up 1 cái j đó
    // beforeUpdate(){
    //     alert("Before Update Show ")
    // }
};
</script>

<!-- // Dữ liệu 2 chiều: (tên thay đổi -> dưới thay đổi và ngược lại)
    - Chiều 1 : Khi v-model thay đổi -> biến Data thay đổi 
    - Chiều 2 : Khi biến Data thay đổi -> {{property}} thay đổi
-->

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
:root {
    --height: 20px;
}
.red {
    color: red;
}
.fontSize {
    font-size: var(--height);
}
</style>
