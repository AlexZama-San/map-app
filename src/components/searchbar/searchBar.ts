import { defineComponent, ref, computed } from 'vue';
import searchResults from "@/components/search-results/searchResults.vue";
import { usePlacesStore } from '@/Composables';

export default defineComponent({
    name: "searchBar",
    components: {searchResults},
    setup(){
        const {searchPlacesByTerm} = usePlacesStore();
        const debounceTime = ref();
        const debouncedValue = ref("aloha")
        

        return {
            debouncedValue,
            searchTerm: computed({
                get() {
                    return debouncedValue.value;
                },
                set(val: string) {
                    if(debounceTime.value) clearTimeout(debounceTime.value);
                    debounceTime.value = setTimeout(() => {
                        debouncedValue.value = val;
                        searchPlacesByTerm(debouncedValue.value);
                    }, 500)
                    
                }
            })

        }
    }
})