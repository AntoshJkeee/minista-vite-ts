import './Support.scss'
import {Image} from "minista";
import { Field, Checkbox, Button, Select } from "@/components";

export const Support = () => {
  return (
      <section
          className='support container'
          aria-labelledby='support-title'
      >
        <div className="support__body">
          <div className="support__info">
            <div className="support__info">
              <h1 className="support__title h2" id="support-title">
                Welcome to our support page!
              </h1>
              <div className="support__description">
                <p>We're here to help you with any problems you may be having with our product.</p>
              </div>
            </div>
            <Image className='support__image' src='/src/assets/images/support/1.png'/>
          </div>
        </div>
        <form action="" className="support__form">
          <Field
              className="support__form-cell"
              label="First Name"
              placeholder="John"
              isRequired
          />
          <Field
              className="support__form-cell"
              label="Last Name"
              placeholder="Doe"
              isRequired
          />
          <Field
              className="support__form-cell"
              label="Email"
              type='email'
              placeholder="example@example.com"
              isRequired
          />
          <Field
              className="support__form-cell"
              label="Phone Number"
              placeholder="(999) 999-99-99"
              inputMode="tel"
              mask="(000) 000-00-00"
              renderBefore={(buttonClassName) => (
                <Select
                  label="Phone number prefix"
                  buttonClassName={buttonClassName}
                  options={[
                    {value: "+7", isSelected: true},
                    {value: "+1"},
                    {value: "+2"},
                    {value: "+3"},
                  ]}
                />
              )}
          />
          <Field
              className="support__form-cell support__form-cell--wide"
              label='Message'
              type="textarea"
              placeholder="Hi! I have question..."
              isRequired
          />
          <div className='support__form-cell support__form-cell--wide support__form-cell--actions'>
            <Checkbox
              id="checkbox-agreement"
              className="support__form-agreement"
              label="I agree with Terms of Use and Privacy Policy"
              isRequired
            />
            <Button
              className="support__form-submit-button"
              label="Send Message"
              type="submit"
            />
          </div>
        </form>
      </section>
  );
}