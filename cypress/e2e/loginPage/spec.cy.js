describe('Login test', () => {
  it('user should be login succefully', () => {
    cy.visit(
      'https://sso.presto.sator-it.dev/Identity/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%3Fclient_id%3Dpresto%26redirect_uri%3Dhttps%253A%252F%252Fpresto.sator-it.dev%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520email%2520roles%26code_challenge%3DnurghavQUKHS6bDK1ZdBCdiuEPuoP_5cCIvDW8SLD0U%26code_challenge_method%3DS256%26response_mode%3Dform_post%26state%3DCfDJ8DYunIHGJoRKtT7bGx5x2Rk5-GaaQkFsh5pWoGo-yYcpa6gx-myxI87g8PymetLQAUZ182b_w-P33T2PKSM_W8GO2iccugiqYeqdBfcqldj6OEg7LICgv1ZglRnzR_cb5ywl1-DizhAzIzfNXDsAlif-RcZY1NANlykjDfiAQPEwyCkkqCZY_v-uqhrgiMmqxoGXbrJjAZksWt3s7uBaZFbTDXpGhbk9au3xIre9_fEoqYeJN29_J2GcQT1rgICPwwJaM4rev_YpzsiR403K12yBBx5iT54EBvhkyXhEDZuyGb2Ik3sZBVjJXs4lIXxWzsVS756vj3fpO2MKqP7Y_s14F4Les6Dz1bhWygTuyFz-X4zNs5O8wN-mhSGVFUS5GA%26x-client-SKU%3DID_NET6_0%26x-client-ver%3D6.32.0.0'
    )
    cy.get('#Input_Username', {timeout: 10000}).type('michaldoubek')
    cy.get('#Input_Password', {timeout: 10000}).type('qazqaz')
    cy.get('.btn-primary', {timeout: 10000}).should('be.visible').click()
    cy.url().should('not.include', '/Account/Login')
  })
})
