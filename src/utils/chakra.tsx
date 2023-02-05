import { ComponentType, JSXElementConstructor } from 'react'
import { forwardRef } from '@chakra-ui/react'

export function chakra<Props extends object> (
    Styled: JSXElementConstructor<Props>,
    styledProps: Partial<Props>
): ComponentType<Props> {
    return forwardRef(({ children, ...props }, ref) => (
        <Styled ref={ref} {...styledProps} {...(props as Props)}>
            {children}
        </Styled>
    )) as unknown as ComponentType<Props>
}