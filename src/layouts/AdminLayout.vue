<template>
    <p>นี่คือ Admin layout</p>
    <ul>
        <li>
            <router-link to="/admin/dashboard">dashboard</router-link>
        </li>
        <li>
            <router-link to="/admin/calendar">calendar</router-link>
        </li>
        <li>
            <router-link to="/admin/customers">customers</router-link>
        </li>
        <li>
            <router-link to="/admin/deliverynotes">deliverynotes</router-link>
        </li>
        <li>
            <router-link to="/admin/items">items</router-link>
        </li>
        <li>
            <router-link to="/admin/ledgar">ledgar</router-link>
        </li>
        <li>
            <router-link to="/admin/quotations">quotations</router-link>
        </li>
        <li>
            <router-link to="/admin/receipts">receipts</router-link>
        </li>
        <li>
            <router-link to="/admin/reports">reports</router-link>
        </li>
        <li>
            <router-link to="/">กลับไปหน้าหลัก</router-link>
        </li>
    </ul>
    <routerView />

</template>