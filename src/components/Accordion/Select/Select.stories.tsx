import { action } from "@storybook/addon-actions";
import { useState } from "react";
import { Select } from "./Select";

export default {
    tittle: 'Select',
    component: Select
}

export const withValue = () => {

    const [value, setValue] = useState('3')

    return (<><Select onChange={setValue}
        value={value}
        items={[
            { value: '1', title: 'Minsk' },
            { value: '2', title: 'Kiev' },
            { value: '3', title: 'Moscow' }
        ]
        } />
    </>
    )
}


export const withoutValue = () => {

    const [value, setValue] = useState('3')
    return (<><Select onChange={setValue}
        value={null}
        items={[
            { value: '1', title: 'Minsk' },
            { value: '2', title: 'Kiev' },
            { value: '3', title: 'Moscow' }
        ]
        } />
    </>
    )
}
