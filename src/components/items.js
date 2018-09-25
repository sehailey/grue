export const torch = {
    name: 'torch',
    description: 'it\'s a torch',
    lit: false
}

export const letter = {
    name: 'letter',
    description: 'addressed to John Zerzan'
}

export const mailbox = {
    name: 'mailbox',
    description: 'It\'s a pretty basic mailbox',
    open: false,
    contains: [letter]
}

export const TORCH = 'TORCH'
export const LETTER = 'LETTER'
export const MAILBOX = 'MAILBOX'

export const items = [TORCH, LETTER, MAILBOX]
