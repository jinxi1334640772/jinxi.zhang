<template>
    <div>
        <ul class="nav nav-tabs">
            <li>
                <router-link :to="{ name: 'home' }">home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'menu' }">menu</router-link>
            </li>
            <li>
                <router-link to="/about">about</router-link>
            </li>
            <li>
                <router-link to="/connect"> connect </router-link>
            </li>
            <li>
                <router-link to="/rigester">rigester</router-link>
            </li>
            <li>
                <router-link to="/login">login</router-link>
            </li>
        </ul>
    </div>
</template>
