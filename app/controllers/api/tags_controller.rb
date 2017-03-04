class Api::TagsController < ApplicationController

  def index
    @tags = Tag.all
    render :index
  end


  def create
    @tag = Tag.new(tag_params)
      if @tag.save
        render :show
      else
        render @tag.errors.full_messages, status: 422
      end
  end

  def update

    @tag = Tag.find(tag_params[:id])
      if @tag.update!(tag_params)
        render :show
      else
        render @tag.errors.full_messages, status: 422
      end
  end

  def destroy
    @tag = Tag.find(tag_params[:id])
    @tag.destroy!
      render :show
  end

  private
    def tag_params
      params.require(:tag).permit(:id, :name)
    end

end
