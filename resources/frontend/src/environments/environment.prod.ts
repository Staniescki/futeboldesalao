import * as environmentLocal from './environment.local'
environmentLocal.environment.production = true
export const environment = environmentLocal.environment
