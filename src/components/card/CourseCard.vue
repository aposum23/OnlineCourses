<script setup lang="ts">
defineProps<{
  id: number;
  name: string;
  image: ImageData;
  rating: number;
  price?: number;
}>()
</script>

<template>
  <div class="course-card">
    <img :src="image" class="course-card__image"/>
    <h4 class="course-card__name">{{name}}</h4>
    <div class="course-card__rating">
      <template v-for="index in 5" :key="index">
        <i class="material-icons course-card__rating-star" v-if="index <= rating">star</i>
        <i class="material-icons course-card__rating-star" v-else>star_border</i>
      </template>
    </div>
    <p class="course-card__price" v-if="price || price === 0">Цена: {{price ? price + ' руб.' : 'бесплатно'}}</p>
  </div>
</template>

<style scoped>
.course-card{
  height: 400px;
  width: 400px;
  display: flex;
  flex-direction: column;
  background: var(--additional-background);
  margin: 1rem;
  cursor: pointer;
  font-family: NotoSansKR;
  color: var(--text-color);
}

.course-card:hover {
  color: var(--text-color-hover);
  outline: var(--text-color-hover) solid 1px;
}

.course-card__image {
  width: calc(100% - 20px);
  height: calc(100% - 100px);
  background: #ffffff;
  margin: .5rem auto;
}

.course-card__name {
  margin: .5rem 3%;
}

.course-card__rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 3%;
}

.course-card__rating-star {
  color: var(--yellow);
  text-align: center;
  width: 24px;
  height: 24px;
}

.course-card__price {
  margin: .5rem 3%;
}

@media(max-width: 500px) {
  .course-card{
    margin: .3rem 0;
    width: 100%;
  }
}
</style>