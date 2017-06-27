<template>
  <div class="header-top-number">
    <span onclick="window.history.go(-1)" class="icon-header-back"></span>
    <router-link to="/">Zhaur</router-link>
    <router-link to="/movie?status=doing1">电影</router-link>
    <router-link to="/book?status=doing2">图书</router-link>
    <router-link to="/network?status=doing3">广播</router-link>
    <router-link to="/login">登陆</router-link>
    <!-- <router-link to="/group?status=doing4">小组</router-link> -->
    <!-- <router-link to="/group/10/13">小组</router-link> -->
    <!-- <router-link :to="{path:'/group',query:{number:1,numbers:2}}">小组</router-link> -->
  </div>
</template>