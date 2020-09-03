import { BannerContext } from "../enums/BannerContext.enum";

export interface BannerState {
    isVisible: boolean;
    context: BannerContext
}
