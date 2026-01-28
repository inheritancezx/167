import { useRouter } from 'vue-router'

export function usePageNavigation() {
  const router = useRouter()

  const navigate = (page) => {
    router.push({ name: page })
  }

  return { navigate }
}
