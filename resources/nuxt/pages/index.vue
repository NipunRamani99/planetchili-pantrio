<template>
    <section>
        <h1 class="title">HELLO FREAK BIRCHES: {{ thing }}</h1>

        <table class="table">
            <thead>
            <th>foo</th>
            <th>bar</th>
            </thead>
            <tbody>
            <tr v-for="data in tdata">
                <td>{{ data.foo }}</td>
                <td>{{ data.bar }}</td>
            </tr>
            </tbody>
        </table>

        <div>
            Total: {{ total }}
        </div>

        <div class="field">
            <label class="label">Foo</label>
            <div class="control">
                <input class="input" type="text" v-model="fooInput" placeholder="foo">
            </div>
        </div>

        <div class="field">
            <label class="label">Bar</label>
            <div class="control">
                <input class="input" type="number" v-model="barInput" placeholder="bar">
            </div>
        </div>
        <div class="field is-grouped">
            <div class="control">
                <button type="button" class="button is-link" @click="addRow">Add FooBar</button>
            </div>
            <div class="control">
                <button type="button" class="button is-link is-light" @click="deleteRow">Remove FooBar</button>
            </div>
        </div>
    </section>
</template>
<script lang="ts">
import {Vue, Component} from "vue-facing-decorator";

@Component
export default class IndexClass extends Vue {
    thing = 420;
    fooInput = "Test";
    barInput = 0;
    tdata = [
        { foo: "Hello", bar: 420 },
        { foo: "Hello", bar: 56 },
        { foo: "Hello", bar: 95 },
    ];

    addRow() {
        const newrow = {foo: this.fooInput, bar: this.barInput};
        this.tdata.push(newrow);
    }

    deleteRow() {
        this.tdata.pop();
    }

    get total() {
        return this.tdata.reduce((carry, obj) => carry + obj.bar, 0);
    }

}
</script>

<style>
@import 'bulma/css/bulma.css';
</style>
