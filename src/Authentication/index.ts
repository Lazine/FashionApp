import { assets as OnBoardingAssets } from './onboarding';
import { assets as WelcomeAssets } from './welcome';
export { default as Onboarding } from './onboarding';
export { default as Welcome } from './welcome';
export const assets = [...OnBoardingAssets, ...WelcomeAssets];