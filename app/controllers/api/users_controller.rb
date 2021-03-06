class Api::UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    if @user.save
      login(@user)

      @notebook = Notebook.create(title: "#{@user.email}\'s notebook", author_id: @user.id)
      Note.create(title: 'First Note', notebook_id: @notebook.id, author_id: @user.id)
      render :show
    else
      render(json: @user.errors.full_messages, status: 422)
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password)
  end
end
