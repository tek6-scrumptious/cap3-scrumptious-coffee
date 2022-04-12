import FormField from "./FormField";
import { Col } from 'react-bootstrap'
const BillingDetails = () => {
    return (
        <>
            <FormField
                name="first Name"
                label="First Name"
                type="text"
                placeholder="Jane"
                required
                Col={Col}
            />
            <FormField
                name="last Name"
                label="Last Name"
                type="text"
                placeholder="Doe"
                required
                Col={Col}

            />
            <FormField
                name="email"
                label="Email"
                type="email"
                placeholder="jane.doe@example.com"
                required
            />
            <FormField
                name="shipping address"
                label="Shipping Address"
                type="text"
                placeholder="1234 Main St"
                required
            />
            <FormField
                name="city"
                label="City"
                type="text"
                placeholder="San Francisco"
                required
                Col={Col}
            />
            <FormField
                name="state"
                label="State"
                type="text"
                placeholder="California"
                required
                Col={Col}
            />
            <FormField
                name="zip"
                label="ZIP"
                type="text"
                placeholder="94103"
                required
                Col={Col}
            />
        </>
    );
};

export default BillingDetails;