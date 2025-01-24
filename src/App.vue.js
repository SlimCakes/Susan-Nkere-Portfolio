import NavBarComponent from './components/NavBarComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
export default (await import('vue')).defineComponent({
    name: 'App',
    components: {
        NavBarComponent,
        FooterComponent,
    },
}); /* PartiallyEnd: #3632/script.vue */
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{
            NavBarComponent,
            FooterComponent,
        },
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col min-h-screen") }, });
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.NavBarComponent;
    /** @type { [typeof __VLS_components.NavBarComponent, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ ...{ class: ("w-full") }, }));
    const __VLS_2 = __VLS_1({ ...{ class: ("w-full") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_elementAsFunction(__VLS_intrinsicElements.main, __VLS_intrinsicElements.main)({ ...{ class: ("flex-1 mx-auto px-4") }, });
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterView;
    /** @type { [typeof __VLS_components.RouterView, typeof __VLS_components.routerView, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
    const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
    __VLS_elementAsFunction(__VLS_intrinsicElements.footer, __VLS_intrinsicElements.footer)({ ...{ class: ("w-[100vw] bg-[#DDB892] h-auto relative left-[41%] right-[50%] -mx-[50vw]") }, });
    const __VLS_12 = __VLS_resolvedLocalAndGlobalComponents.FooterComponent;
    /** @type { [typeof __VLS_components.FooterComponent, ] } */
    // @ts-ignore
    const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
    const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['min-h-screen'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['w-[100vw]'];
    __VLS_styleScopedClasses['bg-[#DDB892]'];
    __VLS_styleScopedClasses['h-auto'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['left-[41%]'];
    __VLS_styleScopedClasses['right-[50%]'];
    __VLS_styleScopedClasses['-mx-[50vw]'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
let __VLS_self;
