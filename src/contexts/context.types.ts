import { PropsWithChildren, ReactElement } from 'react'

export type ContextProvider<T = unknown> = {
  (props: PropsWithChildren<T>): ReactElement<unknown, 'string | JSXElementConstructor<any>'> | null
}

export interface ContextComposerProps {
  children: unknown
}

export type Actions<T, P> = {
  readonly type: T
  readonly payload: P
}

export type ContextType<T, P> = Partial<T> & {
  actions?: P
}
